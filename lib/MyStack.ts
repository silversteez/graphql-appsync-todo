import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a todos table
    const todosTable = new sst.Table(this, "Todos", {
      fields: {
        userId: sst.TableFieldType.STRING,
        todoId: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "todoId" },
    });

    // Create the AppSync GraphQL API
    const api = new sst.AppSyncApi(this, "AppSyncApi", {
      graphqlApi: {
        schema: "graphql/schema.graphql",
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

    // Show the AppSync API Id in the output
    this.addOutputs({
      ApiId: api.graphqlApi.apiId,
    });
  }
}
