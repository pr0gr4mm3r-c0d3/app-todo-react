import { useContext } from "react";
import { TodoContext } from "../../context/Todo/TodoContext";

export const useTodos = () => {
  const { todoState, addTodo, toggleTodo, deleteTodo } =
    useContext(TodoContext);
  return {
    ...todoState,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
