import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodoT } from '../../models/todo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoT[], null>({
      query: () => '/todos',
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation<TodoT, TodoT>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation<TodoT, TodoT | any>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation<TodoT, TodoT>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo.id,
      }),
      invalidatesTags: ['Todos']
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
