import { FaCheck, FaEdit, FaMinus, FaTrash } from 'react-icons/fa';
import { useTodos } from 'src/hooks';
import { ITodo } from 'src/interfaces';
type Props = {
	task: ITodo;
	getIdTask: (id: number, action: 'delete' | 'edit') => void;
};

export const TodoTask = ({
	task: { id, title, description, completed },
	getIdTask,
}: Props) => {
	const { toggleTodo } = useTodos();
	const setComplete = () => toggleTodo(id);
	const sendTaskID = (action: 'delete' | 'edit') => getIdTask(id, action);

	const successOrDanger = completed ? 'teal' : 'red';

	return (
		<>
			<div
				className={`card card-side w-full bg-stone-200 text-primary-content shadow-lg shadow-${
					completed ? 'green' : 'red'
				}-700`}
			>
				<div
					className={`flex justify-center text-white items-center px-10 bg-${
						completed ? 'green' : 'red'
					}-700 shadow-lg shadow-${completed ? 'teal' : 'red'}-700`}
					onClick={setComplete}
				>
					{completed ? <FaCheck /> : <FaMinus />}
				</div>

				<div className='card-body'>
					<div className='flex flex-col sm:flex-row gap-2 justify-between'>
						<div className={`${completed && 'line-through'}`}>
							<h2 className='card-title'>{title}</h2>
							<p>{description}</p>
						</div>
						<div className='card-actions text-white sm:flex-row md:flex-col justify-end md:justify-start'>
							<label
								htmlFor='modal'
								onClick={() => sendTaskID('edit')}
								className='rounded p-4 bg-green-700 cursor-pointer'
							>
								<FaEdit />
							</label>

							<label
								htmlFor='modal'
								onClick={() => sendTaskID('delete')}
								className='rounded p-4 bg-red-700 cursor-pointer'
							>
								<FaTrash />
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
