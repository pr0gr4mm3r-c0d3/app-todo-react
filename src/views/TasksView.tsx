import { useTodos } from '../hooks';
import { TodoTask } from '../components';

export const TasksView = () => {
	const { todos } = useTodos();
	return (
		// <section className='px-3 flex flex-wrap justify-center gap-3 my-6 xl:max-w-5xl mx-auto'>
		<section className='grid gap-5 md:grid xl:grid-cols-2 my-6'>
			{todos.map((todo) => (
				<TodoTask key={todo.id} task={todo} />
			))}
		</section>
	);
};
