import { Todo, TodoItem } from "./types";
import listTodos from "./listTodos";
import createTodo from "./createTodo";
import updateTodo from "./updateTodo";
import deleteTodo from "./deleteTodo";
import getTodoById from "./getTodoById";
import createTodoItem from "./createTodoItem";
import deleteTodoItem from "./deleteTodoItem";
import updateTodoItem from "./updateTodoItem";

type AppSyncEvent = {
  info: { fieldName: string };
  identity: { sub: string };
  arguments: {
    todo: Todo;
    todoItem: TodoItem;
    todoItemIndex: number;
    todoId: string;
  };
};

export async function handler(
  event: AppSyncEvent
): Promise<
  Record<string, unknown>[] | Todo | TodoItem | string | null | undefined
> {
  const userId = event.identity.sub;
  const todo = event.arguments.todo;
  const todoId = event.arguments.todoId;
  const todoItem = event.arguments.todoItem;
  const todoItemIndex = event.arguments.todoItemIndex;

  console.log("main.ts - fieldName:", event.info.fieldName);

  switch (event.info.fieldName) {
    case "listTodos":
      return await listTodos(userId);
    case "createTodo":
      return await createTodo(userId, todo);
    case "updateTodo":
      return await updateTodo(userId, todo);
    case "deleteTodo":
      return await deleteTodo(userId, todoId);
    case "getTodoById":
      return await getTodoById(userId, todo);
    case "createTodoItem":
      return await createTodoItem(userId, todoId, todoItem);
    case "deleteTodoItem":
      return await deleteTodoItem(userId, todoId, todoItemIndex, todoItem);
    case "updateTodoItem":
      return await updateTodoItem(userId, todoId, todoItemIndex, todoItem);
    default:
      return null;
  }
}
