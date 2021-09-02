# AppSync & React Todo App

Deployed here: https://d17sofd3yzro6z.cloudfront.net/

Started with this [**tutorial**](https://serverless-stack.com/examples/how-to-create-a-serverless-graphql-api-with-aws-appsync.html). 
Serverless Stack provides some nice abstractions on top of the AWS CDK for simplifying development and enables "Live Lambda Development" which is amazing.

Authentication is handled by AWS Cognito along with the AWS Amplify client libraries

Uses GraphQL Code Generation to output Apollo/React hooks along with Chakra UI on the front-end. 

## Commands

### `yarn start`

Starts the local Lambda development environment.

### `yarn build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `yarn deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy a specific stack.

### `yarn remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally remove a specific stack.

### `yarn test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).
