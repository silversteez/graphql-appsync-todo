import { DynamoDB } from "aws-sdk";
import { Todo } from "./types";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function updateTodo(
  userId: string,
  todo: Todo
): Promise<Todo> {
  const params = {
    Key: { id: todo.id, userId: userId },
    ReturnValues: "UPDATED_NEW",
    UpdateExpression: "SET title = :title",
    TableName: process.env.TODOS_TABLE as string,
    ExpressionAttributeValues: { ":title": todo.title },
  };

  await dynamoDb.update(params).promise();

  return todo as Todo;
}
