import Todo from "./Todo";
import listTodos from "./listTodos";
import createTodo from "./createTodo";
import updateTodo from "./updateTodo";
import deleteTodo from "./deleteTodo";
import getTodoById from "./getTodoById";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    todo: Todo;
    todoId: string;
  };
};

export async function handler(
  event: AppSyncEvent
): Promise<Record<string, unknown>[] | Todo | string | null | undefined> {
  switch (event.info.fieldName) {
    case "listTodos":
      return await listTodos();
    case "createTodo":
      return await createTodo(event.arguments.todo);
    case "updateTodo":
      return await updateTodo(event.arguments.todo);
    case "deleteTodo":
      return await deleteTodo(event.arguments.todoId);
    case "getTodoById":
      return await getTodoById(event.arguments.todoId);
    default:
      return null;
  }
}
