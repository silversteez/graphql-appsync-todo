import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function createTodo(todo: Todo): Promise<Todo> {
  const params = {
    Item: todo as Record<string, unknown>,
    TableName: process.env.TODOS_TABLE as string,
  };

  await dynamoDb.put(params).promise();

  return todo;
}
