import { FaCheck, FaEdit, FaMinus, FaTrash } from 'react-icons/fa';
import { useTodos } from 'src/hooks';
import { ITodo } from 'src/interfaces';
type Props = {
	task: ITodo;
	getIdToDeleteTask: (id: number) => void;
};

export const TodoTask = ({
	task: { id, title, description, completed },
	getIdToDeleteTask,
}: Props) => {
	const { deleteTodo, toggleTodo } = useTodos();
	const setComplete = () => toggleTodo(id);
	const deleteHandler = () => deleteTodo(id);

	const sendTaskID = () => getIdToDeleteTask(id);

	return (
		<>
			<div
				className={`card card-side w-full bg-slate-200 text-primary-content shadow-lg shadow-${
					completed ? 'teal' : 'red'
				}-900`}
			>
				{/* <div className='flex justify-center bg-primary-content items-center px-10'> */}
				<div
					className={`flex justify-center text-white items-center px-10 bg-green-500 bg-${
						completed ? 'green' : 'red'
					}-700`}
					onClick={setComplete}
				>
					{completed ? <FaCheck /> : <FaMinus />}
				</div>

				<div className='card-body'>
					<div className='flex flex-col md:flex-row gap-2 justify-between'>
						<div className={`${completed && 'line-through'}`}>
							<h2 className='card-title'>{title}</h2>
							<p>{description}</p>
						</div>
						<div className='card-actions text-white sm:flex-row md:flex-col justify-end md:justify-start'>
							{/* <button
								onClick={setComplete}
								className='rounded p-4 btn-primary'
							>
								<FaCheck />
							</button> */}
							<button className='rounded p-4 bg-green-500'>
								<FaEdit />
							</button>

							<label
								htmlFor='modal-delete'
								onClick={sendTaskID}
								className='rounded p-4 bg-red-500  modal-button cursor-pointer'
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
