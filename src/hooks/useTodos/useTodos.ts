import { useContext } from 'react';
import { TodoContext } from '../../context/Todo/TodoContext';

export const useTodos = () => {
	const { todoState, addTodo, editTodo, toggleTodo, deleteTodo } =
		useContext(TodoContext);
	return {
		...todoState,
		addTodo,
		editTodo,
		toggleTodo,
		deleteTodo,
	};
};
