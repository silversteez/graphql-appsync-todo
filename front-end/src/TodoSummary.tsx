import { Button, Flex, Heading } from "@chakra-ui/react";
import { Todo as TodoType, useDeleteTodoMutation } from "./generated";
import { Link } from "react-router-dom";

export function TodoSummary({ todo }: { todo: TodoType }) {
  const [deleteTodoMutation, { loading: deleteLoading, error: deleteError }] =
    useDeleteTodoMutation({ refetchQueries: ["ListTodos"] });
  return (
    <Flex direction={"column"} key={todo.id}>
      <Flex marginBottom={2}>
        <Heading as="h4" size="md" marginRight={2}>
          <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
        </Heading>
        <Button
          isLoading={deleteLoading}
          colorScheme={"black"}
          size={"xs"}
          onClick={(e) =>
            deleteTodoMutation({ variables: { todoId: todo.id } })
          }
        >
          X
        </Button>
        {deleteError && <div>{deleteError.message}</div>}
      </Flex>
    </Flex>
  );
}
