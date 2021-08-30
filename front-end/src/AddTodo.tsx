import { useState } from "react";
import { useCreateTodoMutation } from "./generated";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

export function AddTodo() {
  const [title, setTitle] = useState("");
  const [createTodoMutation, { loading, error }] = useCreateTodoMutation({
    refetchQueries: ["ListTodos"],
  });
  return (
    <Flex>
      <Box flexGrow={1} marginRight={4}>
        <Input
          type="text"
          value={title}
          placeholder={"My shopping list"}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Box>
      <Box>
        <Button
          isLoading={loading}
          colorScheme={"green"}
          onClick={() => {
            createTodoMutation({
              variables: {
                todo: {
                  id: String(new Date().getTime()), // quick hack
                  title: title,
                  items: [],
                },
              },
            });
            setTitle("");
          }}
        >
          Create Todo List
        </Button>
      </Box>
      {error && <div>MUTATION ERROR!</div>}
    </Flex>
  );
}
