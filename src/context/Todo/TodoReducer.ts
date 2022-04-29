import { ITodo, ITodoState } from './../../interfaces/';

type TodoAction =
	| { type: 'ADD_TODO'; payload: ITodo }
	| { type: 'TOGGLE_TODO'; payload: number }
	| { type: 'DELETE_TODO'; payload: number }
	| { type: 'EDIT_TODO'; payload: ITodo };

export const todoReducer = (
	state: ITodoState,
	action: TodoAction
): ITodoState => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map<ITodo>(
					(todo): ITodo =>
						todo.id === action.payload
							? { ...todo, completed: !todo.completed }
							: todo
				),
			};

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(({ id }) => id !== action.payload),
			};

		default:
			return { ...state };
	}
};
