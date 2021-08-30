import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function deleteTodo(
  userId: string,
  todoId: string
): Promise<string> {
  const params = {
    Key: { id: todoId, userId: userId },
    TableName: process.env.TODOS_TABLE as string,
  };

  await dynamoDb.delete(params).promise();

  return todoId;
}
