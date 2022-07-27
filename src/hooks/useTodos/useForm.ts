import { focusInInput } from './../../utils/FocusInInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodos } from '../useTodos/useTodos';
import { ITodo } from 'src/interfaces';
const INITIAL_NEW_TODO: ITodo = {
	id: new Date().getTime(),
	title: '',
	description: '',
	completed: false,
};

type FormElement = HTMLInputElement | HTMLTextAreaElement;

export const useForm = () => {
	const { todos, addTodo, editTodo } = useTodos();

	const [newTodo, setNewTodo] = useState<ITodo>({
		...INITIAL_NEW_TODO,
		id: new Date().getTime(),
	});

	const resetNewTodo = () =>
		setNewTodo({ ...INITIAL_NEW_TODO, id: new Date().getTime() });

	const loadTodoInForm = (taskId: number) => {
		const task = todos.find(({ id }) => id === taskId);
		task && setNewTodo(task);
	};
	const changeInputHandler = (e: ChangeEvent<FormElement>) => {
		const { name, value } = e.target;
		setNewTodo({
			...newTodo,
			[name]: value,
		});
	};

	const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
		const { title, description } = newTodo;
		if (title && description) {
			const task = todos.find(({ id }) => id === newTodo.id);
			if (task) {
				editTodo(newTodo);
				document.getElementById('btn__close')?.click();
			} else {
				addTodo(newTodo);
			}
			resetNewTodo();
			focusInInput();
		} else {
			console.error('Campos Vacios');
		}
	};

	return {
		newTodo,
		addTaskHandler,
		changeInputHandler,
		resetNewTodo,
		loadTodoInForm,
		resetNewTodo,
	};
};
