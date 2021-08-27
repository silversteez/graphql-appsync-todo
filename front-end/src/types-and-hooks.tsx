import { useQuery, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Todo = {
  __typename?: "Todo";
  id: Scalars["ID"];
  userId: Scalars["ID"];
  title: Scalars["String"];
  createdAt: Scalars["Int"];
  items: Array<TodoItem>;
};

export type TodoItem = {
  __typename?: "TodoItem";
  id: Scalars["ID"];
  content: Scalars["String"];
  isComplete: Scalars["Boolean"];
};

export type TodoInput = {
  id: Scalars["ID"];
  title: Scalars["String"];
  items: Array<TodoItemInput>;
};

export type UpdateTodoInput = {
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<UpdateTodoItemInput>>>;
};

export type TodoItemInput = {
  id: Scalars["ID"];
  content: Scalars["String"];
  isComplete: Scalars["Boolean"];
};

export type UpdateTodoItemInput = {
  id: Scalars["ID"];
  content?: Maybe<Scalars["String"]>;
  isComplete?: Maybe<Scalars["Boolean"]>;
};

export type Query = {
  __typename?: "Query";
  listTodos?: Maybe<Array<Maybe<Todo>>>;
  getTodoById?: Maybe<Todo>;
};

export type QueryGetTodoByIdArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Scalars["String"]>;
  updateTodo?: Maybe<Todo>;
};

export type MutationCreateTodoArgs = {
  todo: TodoInput;
};

export type MutationDeleteTodoArgs = {
  id: Scalars["String"];
};

export type MutationUpdateTodoArgs = {
  todo: UpdateTodoInput;
};

export type ListTodosQueryVariables = Exact<{ [key: string]: never }>;

export type ListTodosQuery = {
  __typename?: "Query";
  listTodos?: Maybe<
    Array<
      Maybe<{
        __typename?: "Todo";
        id: string;
        createdAt: number;
        title: string;
        userId: string;
        items: Array<{
          __typename?: "TodoItem";
          content: string;
          id: string;
          isComplete: boolean;
        }>;
      }>
    >
  >;
};

export const ListTodosDocument = `
    query ListTodos {
  listTodos {
    id
    createdAt
    items {
      content
      id
      isComplete
    }
    title
    userId
  }
}
    `;

export const useListTodosQuery = <TData, TError>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: ListTodosQueryVariables,
  options?: UseQueryOptions<ListTodosQuery, TError, TData>
) =>
  useQuery<ListTodosQuery, TError, TData>(
    ["ListTodos", variables],
    fetcher<ListTodosQuery, ListTodosQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ListTodosDocument,
      variables
    ),
    options
  );
