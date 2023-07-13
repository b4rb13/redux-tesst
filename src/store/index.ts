import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";
import inputValueReducer from "./features/input-value/input-value-slice";
import { todoApi } from "../services/todos";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputValue: inputValueReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
