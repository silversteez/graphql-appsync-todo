import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function createTodo(
  userId: string,
  todo: Todo
): Promise<Todo> {
  todo.userId = userId;
  todo.createdAt = Math.floor(new Date().getTime() / 1000);
  const params = {
    Item: todo as Record<string, unknown>,
    TableName: process.env.TODOS_TABLE as string,
  };

  await dynamoDb.put(params).promise();

  return todo;
}
