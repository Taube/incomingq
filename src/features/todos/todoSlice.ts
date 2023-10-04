import { ToDo } from "@/models/todos";
import { baseUrl, TAGS, ENDPOINTS, REDUCER } from "@/constants/todos";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTodo: builder.query<ToDo, string>({
      providesTags: [TAGS.LIST],
      query: (id) => `${ENDPOINTS.TODOS}/${id}`,
    }),
    getTodoList: builder.query<Array<ToDo>, void>({
      providesTags: [TAGS.LIST],
      query: () => ENDPOINTS.TODOS,
    }),
    addTodo: builder.mutation<ToDo, ToDo>({
      invalidatesTags: [TAGS.LIST],
      query: (todo) => ({
        body: todo,
        method: "POST",
        url: ENDPOINTS.TODOS,
      }),
    }),
    updateTodo: builder.mutation<void, ToDo>({
      invalidatesTags: [TAGS.LIST],
      query: ({ id, ...rest }) => ({
        body: rest,
        method: "PUT",
        url: `${ENDPOINTS.TODOS}/${id}`,
      }),
    }),
    deleteTodo: builder.mutation<void, string>({
      invalidatesTags: [TAGS.LIST],
      query: (id) => ({
        method: "DELETE",
        url: `${ENDPOINTS.TODOS}/${id}`,
      }),
    }),
  }),
  reducerPath: REDUCER.TODOS,
  tagTypes: [TAGS.LIST],
});

export const {
  middleware,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodoListQuery,
  useUpdateTodoMutation,
} = todosApi;
