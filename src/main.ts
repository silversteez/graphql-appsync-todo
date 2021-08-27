import Todo from "./Todo";
import listTodos from "./listTodos";
import createTodo from "./createTodo";
import updateTodo from "./updateTodo";
import deleteTodo from "./deleteTodo";
import getTodoById from "./getTodoById";

type AppSyncEvent = {
  info: { fieldName: string };
  identity: { sub: string };
  arguments: { todo: Todo };
};

export async function handler(
  event: AppSyncEvent
): Promise<Record<string, unknown>[] | Todo | string | null | undefined> {
  const userId = event.identity.sub;

  switch (event.info.fieldName) {
    case "listTodos":
      return await listTodos(userId);
    case "createTodo":
      return await createTodo(userId, event.arguments.todo);
    case "updateTodo":
      return await updateTodo(userId, event.arguments.todo);
    case "deleteTodo":
      return await deleteTodo(userId, event.arguments.todo);
    case "getTodoById":
      return await getTodoById(userId, event.arguments.todo);
    default:
      return null;
  }
}
