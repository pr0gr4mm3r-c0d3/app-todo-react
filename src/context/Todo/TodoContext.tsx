import { createContext } from "react";
import { ITodo, ITodoState } from "../../interfaces";

export type TodoContextProps = {
  todoState: ITodoState;
  addTodo: (todo: ITodo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
