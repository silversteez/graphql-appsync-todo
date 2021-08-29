import { useState } from "react";
import { useCreateTodoMutation } from "./generated";

export function AddTodo() {
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
