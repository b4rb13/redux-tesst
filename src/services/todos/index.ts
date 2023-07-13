import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "./types.ts";

export const todoApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Array<Todo>, string | null>({
      query: () => `todos/`,
    }),
    getTodoById: builder.query<Todo, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todoApi;
