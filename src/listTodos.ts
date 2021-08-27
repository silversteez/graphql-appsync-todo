import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function listTodos(
  userId: string
): Promise<Record<string, unknown>[] | undefined> {
  const params = {
    TableName: process.env.TODOS_TABLE as string,
    KeyConditionExpression: "userId = :hashKey",
    ExpressionAttributeValues: {
      ":hashKey": userId,
    },
  };

  const data = await dynamoDb.query(params).promise();

  return data.Items;
}
