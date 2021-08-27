import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function getTodoById(
  userId: string,
  todo: Todo
): Promise<Todo | undefined> {
  const params = {
    Key: { id: todo.id, userId: userId },
    TableName: process.env.TODOS_TABLE as string,
  };

  const { Item } = await dynamoDb.get(params).promise();

  return Item as Todo;
}
