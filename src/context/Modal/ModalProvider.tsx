import { useReducer } from 'react';
import { ITodo, ITodoState } from '../../interfaces';
import { TodoContext } from './ModalContext';
import { todoReducer } from './ModalReducer';

const INITIAL_STATE: ITodoState = {
	todoCount: 2,
	todos: [
		{
			id: 0,
			title: 'NewTask',
			description: 'Some Description',
			completed: false,
		},
		{
			id: 1,
			title: 'A Task',
			description: 'Some Description',
			completed: false,
		},
	],
	completed: 0,
	pending: 2,
};

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const TodoProvider = ({ children }: Props) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

	const addTodo = (todo: ITodo) =>
		dispatch({ type: 'ADD_TODO', payload: todo });
	const editTodo = (todo: ITodo) =>
		dispatch({ type: 'EDIT_TODO', payload: todo });
	const deleteTodo = (id: number) =>
		dispatch({ type: 'DELETE_TODO', payload: id });
	const toggleTodo = (id: number) =>
		dispatch({ type: 'TOGGLE_TODO', payload: id });

	return (
		<TodoContext.Provider
			value={{ todoState, addTodo, editTodo, deleteTodo, toggleTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};
