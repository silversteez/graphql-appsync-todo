type Todo = {
  id: string;
  userId: string;
  title: string;
  createdAt: number;
  items: TodoItem[];
};

type TodoItem = {
  id: string;
  content: string;
  isComplete: boolean;
};

export default Todo;
