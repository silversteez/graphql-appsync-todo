import {
  TodoItem as TodoItemType,
  useDeleteTodoItemMutation,
  useUpdateTodoItemMutation,
} from "./generated";
import {
  Button,
  Center,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Fade,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export function TodoItem({
  todoId,
  todoItemIndex,
  item,
}: {
  todoId: string;
  todoItemIndex: number;
  item: TodoItemType;
}) {
  let [content, setContent] = useState(item.content);
  let [isChecked, setChecked] = useState(item.isComplete);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [
    deleteTodoItemMutation,
    { loading: deleteLoading, error: deleteError },
  ] = useDeleteTodoItemMutation({ refetchQueries: ["ListTodos"] });
  const [updateTodoItemMutation, { error: updateError }] =
    useUpdateTodoItemMutation({ refetchQueries: ["ListTodos"] });
  return (
    <Flex
      key={item.id}
      px={4}
      py={2}
      borderRadius={"md"}
      transition={"all"}
      transitionDuration={"100ms"}
      _hover={{ backgroundColor: "gray.900" }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Center marginRight={4}>
        <Checkbox
          colorScheme="green"
          isChecked={isChecked}
          onChange={() => {
            // Quick hack to avoid dealing with updating apollo cache for now
            setChecked(!item.isComplete);
            updateTodoItemMutation({
              variables: {
                todoId,
                todoItem: {
                  id: item.id,
                  isComplete: !item.isComplete,
                  content,
                },
                todoItemIndex,
              },
            });
          }}
        />
      </Center>
      <Center>
        <Editable
          value={content}
          onChange={(val) => setContent(val)}
          onSubmit={() => {
            updateTodoItemMutation({
              variables: {
                todoId,
                todoItem: { id: item.id, isComplete: item.isComplete, content },
                todoItemIndex,
              },
            });
          }}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Center>
      <Spacer />
      <Center>
        <Fade in={isOpen}>
          <Button
            isLoading={deleteLoading}
            colorScheme="pink"
            size={"xs"}
            onClick={() => {
              deleteTodoItemMutation({
                variables: { todoId, todoItemId: item.id, todoItemIndex },
              });
            }}
          >
            X
          </Button>
        </Fade>
      </Center>
      {updateError && <div>{updateError.message}</div>}
      {deleteError && <div>{deleteError.message}</div>}
    </Flex>
  );
}
