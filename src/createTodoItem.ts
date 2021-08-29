import { DynamoDB } from "aws-sdk";
import { TodoItem } from "./types";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function createTodoItem(
  userId: string,
  todoId: string,
  todoItem: TodoItem
): Promise<TodoItem> {
  const params = {
    Key: { id: todoId, userId: userId },
    TableName: process.env.TODOS_TABLE as string,
    UpdateExpression: "SET #i = list_append(#i, :todoItems)",
    ExpressionAttributeValues: { ":todoItems": [todoItem] },
    ExpressionAttributeNames: { "#i": "items" },
    ReturnValues: "UPDATED_NEW",
  };

  await dynamoDb.update(params).promise();

  return todoItem as TodoItem;
}
