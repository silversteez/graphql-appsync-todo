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
  deleteTodo?: Maybe<Scalars['String']>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  todo: TodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  todo: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  listTodos?: Maybe<Array<Maybe<Todo>>>;
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

export type CreateTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: Maybe<{ __typename?: 'Todo', id: string, title: string }> };

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', listTodos?: Maybe<Array<Maybe<{ __typename?: 'Todo', id: string, createdAt: number, title: string, userId: string, items: Array<{ __typename?: 'TodoItem', content: string, id: string, isComplete: boolean }> }>>> };


export const CreateTodoDocument = gql`
    mutation CreateTodo {
  createTodo(
    todo: {id: "123", title: "todo one", items: [{content: "do it", id: "123", isComplete: false}]}
  ) {
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