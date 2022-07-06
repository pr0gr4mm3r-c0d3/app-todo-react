import { useTodos } from 'src/hooks';
import { ModalDelete, TodoTask } from 'src/components';
import { useState } from 'react';

export const TasksView = () => {
	const { todos } = useTodos();
	const [idTask, setIdTask] = useState<number>();
	const getIdToDeleteTask = (id: number) => {
		console.log('id Task', id);
		setIdTask(id);
	};
	return (
		// <section className='px-3 flex flex-wrap justify-center gap-3 my-6 xl:max-w-5xl mx-auto'>
		<section className='grid gap-5 md:grid xl:grid-cols-2 my-6'>
			{todos.length > 0 ? (
				<>
					{todos.map((todo) => (
						<TodoTask
							key={todo.id}
							task={todo}
							getIdToDeleteTask={getIdToDeleteTask}
						/>
					))}
					<ModalDelete id={idTask} />
				</>
			) : (
				<>
					<h1 className='text-9xl text-center text-red-500'>
						Not Tasks
					</h1>
				</>
			)}
		</section>
	);
};
