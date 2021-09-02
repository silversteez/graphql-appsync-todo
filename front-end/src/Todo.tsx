import { Box, Text, Flex, Heading, Stack } from "@chakra-ui/react";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";
import { useListTodosQuery } from "./generated";
import { useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

export function Todo() {
  const { data, loading, error } = useListTodosQuery();
  const { id } = useParams<any>();
  const todo = data?.listTodos.find((t) => t.id === id);

  if (todo === undefined) {
    return <div>ERROR - NO TODO!</div>;
  }
  return (
    <Layout>
      <Flex direction={"column"} key={todo.id}>
        <Flex marginBottom={4}>
          <Link to={"/"}>
            <Text>Back</Text>
          </Link>
        </Flex>
        <Flex marginBottom={2}>
          <Heading as="h4" size="md" marginRight={2}>
            {todo.title}
          </Heading>
        </Flex>
        <Box marginBottom={4}>
          <AddTodoItem todo={todo} />
        </Box>
        <Stack spacing={2}>
          {todo.items.map((item, index) => (
            <TodoItem
              todoId={todo.id}
              todoItemIndex={index}
              item={item}
              key={item.id}
            />
          ))}
        </Stack>
        {error && <div>ERROR!</div>}
        {loading && <div>loading...</div>}
      </Flex>
    </Layout>
  );
}
