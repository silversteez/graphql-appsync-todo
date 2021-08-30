import { useState } from "react";
import { Todo } from "./generated";
import { useCreateTodoItemMutation } from "./generated";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

export function AddTodoItem({ todo }: { todo: Todo }) {
  const [content, setContent] = useState("");
  const [createTodoItemMutation, { loading, error }] =
    useCreateTodoItemMutation({
      refetchQueries: ["ListTodos"],
    });

  const handleCreateItem = () => {
    createTodoItemMutation({
      variables: {
        todoId: todo.id,
        todoItem: {
          id: String(new Date().getTime()), // quick hack
          content: content,
          isComplete: false,
        },
      },
    });
    setContent("");
  };
  return (
    <Flex>
      <Box flexGrow={1} marginRight={4}>
        <Input
          type="text"
          value={content}
          placeholder={"Get coffee"}
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreateItem();
            }
          }}
        />
      </Box>
      <Box>
        <Button
          isLoading={loading}
          colorScheme={"green"}
          onClick={handleCreateItem}
        >
          Add Item
        </Button>
      </Box>
      {error && <div>MUTATION ERROR!</div>}
    </Flex>
  );
}
