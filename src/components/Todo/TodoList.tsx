import { useTodos } from '../../hooks';
import { TodoTask } from './TodoTask';

export const TodoList = () => {
	const { todos } = useTodos();
	return (
		<div>
			<div className='grid px-3 gap-3 md:grid md:grid-cols-2 '>
				{todos.map((todo) => (
					<TodoTask key={todo.id} task={todo} />
				))}
			</div>
		</div>
	);
};
