import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function getTodoById(
  todoId: string
): Promise<Todo | undefined> {
  const params = {
    Key: { id: todoId },
    TableName: process.env.TODOS_TABLE as string,
  };

  const { Item } = await dynamoDb.get(params).promise();

  return Item as Todo;
}
