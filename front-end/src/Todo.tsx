import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";
import { Todo as TodoType, useDeleteTodoMutation } from "./generated";

export function Todo({ todo }: { todo: TodoType }) {
  const [deleteTodoMutation, { loading: deleteLoading, error: deleteError }] =
    useDeleteTodoMutation({ refetchQueries: ["ListTodos"] });
  return (
    <Flex direction={"column"} key={todo.id}>
      <Flex marginBottom={2}>
        <Heading as="h4" size="md" marginRight={2}>
          {todo.title}
        </Heading>
        <Button
          isLoading={deleteLoading}
          colorScheme={"pink"}
          size={"xs"}
          onClick={(e) =>
            deleteTodoMutation({ variables: { todoId: todo.id } })
          }
        >
          X
        </Button>
        {deleteError && <div>{deleteError.message}</div>}
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
    </Flex>
  );
}
