import * as sst from "@serverless-stack/resources";
import * as appsync from "@aws-cdk/aws-appsync";
import * as cognito from "@aws-cdk/aws-cognito";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const auth = new sst.Auth(this, "Auth", {
      cognito: {
        userPool: {
          signInAliases: { email: true },
        },
      },
    });

    // Create a todos table
    const todosTable = new sst.Table(this, "Todos", {
      fields: {
        id: sst.TableFieldType.STRING,
        userId: sst.TableFieldType.STRING,
        createdAt: sst.TableFieldType.NUMBER,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "createdAt" },
      secondaryIndexes: {
        todoIdIndex: { partitionKey: "id", sortKey: "createdAt" },
      },
    });

    // Create the AppSync GraphQL API
    const api = new sst.AppSyncApi(this, "AppSyncApi", {
      graphqlApi: {
        schema: "graphql/schema.graphql",
        authorizationConfig: {
          defaultAuthorization: {
            authorizationType: appsync.AuthorizationType.USER_POOL,
            userPoolConfig: {
              userPool: auth.cognitoUserPool as cognito.UserPool,
            },
          },
        },
      },
      defaultFunctionProps: {
        // Pass the table name to the function
        environment: {
          TODOS_TABLE: todosTable.dynamodbTable.tableName,
        },
      },
      dataSources: {
        todos: "src/main.handler",
      },
      resolvers: {
        "Query    listTodos": "todos",
        "Query    getTodoById": "todos",
        "Mutation createTodo": "todos",
        "Mutation updateTodo": "todos",
        "Mutation deleteTodo": "todos",
      },
    });

    // Enable the AppSync API to access the DynamoDB table
    api.attachPermissions([todosTable]);

    const site = new sst.ReactStaticSite(this, "ReactSite", {
      path: "front-end",
      environment: {
        // Pass in the API endpoint to our app
        REACT_APP_API_URL: api.url,
      },
    });

    // Show the AppSync API Id in the output
    this.addOutputs({
      ApiId: api.graphqlApi.apiId,
      SiteUrl: site.url,
      ApiEndpoint: api.url,
    });
  }
}
