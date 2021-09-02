import { Stack } from "@chakra-ui/react";
import { useListTodosQuery } from "./generated";
import { AddTodo } from "./AddTodo";
import { TodoSummary } from "./TodoSummary";
import { Layout } from "./Layout";

export function Todos() {
  const { data, loading, error } = useListTodosQuery();
  return (
    <Layout>
      {data &&
        data.listTodos.map((todo) => <TodoSummary todo={todo} key={todo.id} />)}
      <AddTodo />
      {error && <div>ERROR!</div>}
      {loading && <div>loading...</div>}
    </Layout>
  );
}
