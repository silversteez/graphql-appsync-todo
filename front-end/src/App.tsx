import { useListTodosQuery } from "./generated";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AddTodo } from "./AddTodo";
import { Stack } from "@chakra-ui/react";
import { Todo } from "./Todo";

function App() {
  const { data, loading, error } = useListTodosQuery();
  return (
    <Stack
      spacing={8}
      p={8}
      m="0 auto"
      className="App"
      w={"100vw"}
      h={"100vh"}
      minH={"100vh"}
      textColor={"white"}
    >
      {data && data.listTodos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      <AddTodo />
      {error && <div>ERROR!</div>}
      {loading && <div>loading...</div>}
    </Stack>
  );
}

export default withAuthenticator(App);
