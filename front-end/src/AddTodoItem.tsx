import { useState } from "react";
import { useCreateTodoItemMutation } from "./generated";

export function AddTodoItem() {
  const [content, setContent] = useState("");
  const [createTodoItemMutation, { data, loading, error }] =
    useCreateTodoItemMutation();
  return (
    <div>
      <div>
        <label htmlFor="todo-title">TODO Item Content</label>
        <input
          id="todo-content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() =>
            createTodoItemMutation({
              variables: {
                todoId: "1630215377002",
                todoItem: {
                  id: String(new Date().getTime()), // quick hack
                  content: content,
                  isComplete: false,
                },
              },
            })
          }
        >
          Add TODO Item
        </button>
      </div>
      {error && <div>MUTATION ERROR!</div>}
      {loading && <div>loading mutation...</div>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    </div>
  );
}
