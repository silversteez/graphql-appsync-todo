import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function deleteTodo(todoId: string): Promise<string> {
  const params = {
    Key: { id: todoId },
    TableName: process.env.TODOS_TABLE as string,
  };

  await dynamoDb.delete(params).promise();

  return todoId;
}
