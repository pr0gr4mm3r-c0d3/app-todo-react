export interface ITodo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}
export interface ITodoState {
	todos: ITodo[];
}
