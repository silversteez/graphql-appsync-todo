import { useListTodosQuery } from "./generated";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AddTodo } from "./AddTodo";
import { AddTodoItem } from "./AddTodoItem";

function App() {
  const { data, loading, error } = useListTodosQuery();

  return (
    <div className="App">
      <AddTodo />
      <AddTodoItem />
      {error && <div>ERROR!</div>}
      {loading && <div>loading...</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}

export default withAuthenticator(App);
