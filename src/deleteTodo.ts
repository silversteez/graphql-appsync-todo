import { DynamoDB } from "aws-sdk";
import { Todo } from "./types";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function deleteTodo(
  userId: string,
  todo: Todo
): Promise<string> {
  const params = {
    Key: { id: todo.id, userId: userId },
    TableName: process.env.TODOS_TABLE as string,
  };

  await dynamoDb.delete(params).promise();

  return todo.id;
}
