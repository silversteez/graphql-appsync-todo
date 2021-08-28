import "./App.css";
import { useCreateTodoMutation, useListTodosQuery } from "./generated";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [createTodoMutation, { data, loading, error }] =
    useCreateTodoMutation();
  return (
    <div>
      <div>
        <label htmlFor="todo-title">TODO Title</label>
        <input
          id="todo-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() =>
            createTodoMutation({
              variables: {
                todo: {
                  id: String(new Date().getTime()), // quick hack
                  title: title,
                  items: [],
                },
              },
            })
          }
        >
          Add TODO
        </button>
      </div>
      {error && <div>MUTATION ERROR!</div>}
      {loading && <div>loading mutation...</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}

function App() {
  const { data, loading, error } = useListTodosQuery();

  return (
    <div className="App">
      <AddTodo />
      {error && <div>ERROR!</div>}
      {loading && <div>loading...</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}

export default withAuthenticator(App);
