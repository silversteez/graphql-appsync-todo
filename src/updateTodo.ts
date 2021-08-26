import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function updateTodo(todo: Todo): Promise<Todo> {
  const params = {
    Key: { id: todo.id },
    ReturnValues: "UPDATED_NEW",
    UpdateExpression: "SET content = :content",
    TableName: process.env.TODOS_TABLE as string,
    ExpressionAttributeValues: { ":content": todo.content },
  };

  await dynamoDb.update(params).promise();

  return todo as Todo;
}
