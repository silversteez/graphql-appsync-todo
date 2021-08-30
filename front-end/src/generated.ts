import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Scalars['ID']>;
  createTodoItem?: Maybe<TodoItem>;
  updateTodoItem?: Maybe<TodoItem>;
  deleteTodoItem?: Maybe<TodoItem>;
};


export type MutationCreateTodoArgs = {
  todo: TodoInput;
};


export type MutationUpdateTodoArgs = {
  todo: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  todoId: Scalars['ID'];
};


export type MutationCreateTodoItemArgs = {
  todoId: Scalars['ID'];
  todoItem: TodoItemInput;
};


export type MutationUpdateTodoItemArgs = {
  todoId: Scalars['ID'];
  todoItem: UpdateTodoItemInput;
  todoItemIndex: Scalars['Int'];
};


export type MutationDeleteTodoItemArgs = {
  todoId: Scalars['ID'];
  todoItemId: Scalars['ID'];
  todoItemIndex: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  listTodos: Array<Todo>;
  getTodoById?: Maybe<Todo>;
};


export type QueryGetTodoByIdArgs = {
  id: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  title: Scalars['String'];
  createdAt: Scalars['Int'];
  items: Array<TodoItem>;
};

export type TodoInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  items: Array<TodoItemInput>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  id: Scalars['ID'];
  content: Scalars['String'];
  isComplete: Scalars['Boolean'];
};

export type TodoItemInput = {
  id: Scalars['ID'];
  content: Scalars['String'];
  isComplete: Scalars['Boolean'];
};

export type UpdateTodoInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<UpdateTodoItemInput>>>;
};

export type UpdateTodoItemInput = {
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
};

export type CreateTodoMutationVariables = Exact<{
  todo: TodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: Maybe<{ __typename?: 'Todo', id: string, title: string }> };

export type DeleteTodoMutationVariables = Exact<{
  todoId: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: Maybe<string> };

export type UpdateTodoMutationVariables = Exact<{
  todo: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: Maybe<{ __typename?: 'Todo', id: string, title: string }> };

export type CreateTodoItemMutationVariables = Exact<{
  todoId: Scalars['ID'];
  todoItem: TodoItemInput;
}>;


export type CreateTodoItemMutation = { __typename?: 'Mutation', createTodoItem?: Maybe<{ __typename?: 'TodoItem', id: string, content: string, isComplete: boolean }> };

export type UpdateTodoItemMutationVariables = Exact<{
  todoId: Scalars['ID'];
  todoItem: UpdateTodoItemInput;
  todoItemIndex: Scalars['Int'];
}>;


export type UpdateTodoItemMutation = { __typename?: 'Mutation', updateTodoItem?: Maybe<{ __typename?: 'TodoItem', id: string, content: string, isComplete: boolean }> };

export type DeleteTodoItemMutationVariables = Exact<{
  todoId: Scalars['ID'];
  todoItemId: Scalars['ID'];
  todoItemIndex: Scalars['Int'];
}>;


export type DeleteTodoItemMutation = { __typename?: 'Mutation', deleteTodoItem?: Maybe<{ __typename?: 'TodoItem', id: string }> };

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', listTodos: Array<{ __typename?: 'Todo', id: string, createdAt: number, title: string, userId: string, items: Array<{ __typename?: 'TodoItem', content: string, id: string, isComplete: boolean }> }> };


export const CreateTodoDocument = gql`
    mutation CreateTodo($todo: TodoInput!) {
  createTodo(todo: $todo) {
    id
    title
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($todoId: ID!) {
  deleteTodo(todoId: $todoId)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($todo: UpdateTodoInput!) {
  updateTodo(todo: $todo) {
    id
    title
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const CreateTodoItemDocument = gql`
    mutation CreateTodoItem($todoId: ID!, $todoItem: TodoItemInput!) {
  createTodoItem(todoId: $todoId, todoItem: $todoItem) {
    id
    content
    isComplete
  }
}
    `;
export type CreateTodoItemMutationFn = Apollo.MutationFunction<CreateTodoItemMutation, CreateTodoItemMutationVariables>;

/**
 * __useCreateTodoItemMutation__
 *
 * To run a mutation, you first call `useCreateTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoItemMutation, { data, loading, error }] = useCreateTodoItemMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      todoItem: // value for 'todoItem'
 *   },
 * });
 */
export function useCreateTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoItemMutation, CreateTodoItemMutationVariables>(CreateTodoItemDocument, options);
      }
export type CreateTodoItemMutationHookResult = ReturnType<typeof useCreateTodoItemMutation>;
export type CreateTodoItemMutationResult = Apollo.MutationResult<CreateTodoItemMutation>;
export type CreateTodoItemMutationOptions = Apollo.BaseMutationOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>;
export const UpdateTodoItemDocument = gql`
    mutation UpdateTodoItem($todoId: ID!, $todoItem: UpdateTodoItemInput!, $todoItemIndex: Int!) {
  updateTodoItem(
    todoId: $todoId
    todoItem: $todoItem
    todoItemIndex: $todoItemIndex
  ) {
    id
    content
    isComplete
  }
}
    `;
export type UpdateTodoItemMutationFn = Apollo.MutationFunction<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>;

/**
 * __useUpdateTodoItemMutation__
 *
 * To run a mutation, you first call `useUpdateTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoItemMutation, { data, loading, error }] = useUpdateTodoItemMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      todoItem: // value for 'todoItem'
 *      todoItemIndex: // value for 'todoItemIndex'
 *   },
 * });
 */
export function useUpdateTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>(UpdateTodoItemDocument, options);
      }
export type UpdateTodoItemMutationHookResult = ReturnType<typeof useUpdateTodoItemMutation>;
export type UpdateTodoItemMutationResult = Apollo.MutationResult<UpdateTodoItemMutation>;
export type UpdateTodoItemMutationOptions = Apollo.BaseMutationOptions<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>;
export const DeleteTodoItemDocument = gql`
    mutation DeleteTodoItem($todoId: ID!, $todoItemId: ID!, $todoItemIndex: Int!) {
  deleteTodoItem(
    todoId: $todoId
    todoItemId: $todoItemId
    todoItemIndex: $todoItemIndex
  ) {
    id
  }
}
    `;
export type DeleteTodoItemMutationFn = Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;

/**
 * __useDeleteTodoItemMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemMutation, { data, loading, error }] = useDeleteTodoItemMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      todoItemId: // value for 'todoItemId'
 *      todoItemIndex: // value for 'todoItemIndex'
 *   },
 * });
 */
export function useDeleteTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>(DeleteTodoItemDocument, options);
      }
export type DeleteTodoItemMutationHookResult = ReturnType<typeof useDeleteTodoItemMutation>;
export type DeleteTodoItemMutationResult = Apollo.MutationResult<DeleteTodoItemMutation>;
export type DeleteTodoItemMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
export const ListTodosDocument = gql`
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

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
      }
export function useListTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = Apollo.QueryResult<ListTodosQuery, ListTodosQueryVariables>;