import { DynamoDB } from "aws-sdk";
import { TodoItem } from "./types";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function updateTodoItem(
  userId: string,
  todoId: string,
  todoItemIndex: number,
  todoItem: TodoItem
): Promise<TodoItem> {
  const params = {
    Key: { id: todoId, userId: userId },
    TableName: process.env.TODOS_TABLE as string,
    UpdateExpression: `SET #i[${todoItemIndex}] = :todoItem`,
    ExpressionAttributeValues: { ":todoItem": todoItem },
    ExpressionAttributeNames: { "#i": "items" },
    ReturnValues: "UPDATED_NEW",
  };

  await dynamoDb.update(params).promise();

  return todoItem as TodoItem;
}
