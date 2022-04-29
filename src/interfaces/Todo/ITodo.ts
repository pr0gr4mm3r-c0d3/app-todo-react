export interface ITodo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}
export interface ITodoState {
	completed: number;
	todos: ITodo[];
	todoCount: number;
	pending: number;
}
