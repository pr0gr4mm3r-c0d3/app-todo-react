import { FaEdit, FaTrash } from 'react-icons/fa';
import { useTodos } from '../../hooks';
import { ITodo } from '../../interfaces';

type Props = {
	task: ITodo;
};

export const TodoTask = ({
	task: { id, title, description, completed },
}: Props) => {
	const { deleteTodo, toggleTodo } = useTodos();
	const setComplete = () => toggleTodo(id);
	return (
		<div className='p-3 flex justify-between bg-slate-100 bg-opacity-95 text-slate-900 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-gray-600'>
			<div>
				<h3>{title}</h3>
				<p className='pb-xl'>{description}</p>
				<div className='cursor-pointer w-max'>
					<input
						type='checkbox'
						name='completed'
						id={`complete-${id}`}
						checked={completed}
						onChange={setComplete}
					/>{' '}
					<label htmlFor={`complete-${id}`}>Complete Task</label>
				</div>
			</div>
			<div className='flex items-center text-slate-50'>
				<button className='flex gap-2 items-center bg-green-700 mx-1 p-2 rounded'>
					Edit <FaEdit />
				</button>
				<button
					className='flex gap-2 items-center bg-red-700 mx-1 p-2 rounded'
					onClick={() => deleteTodo(id)}
				>
					Delete <FaTrash />
				</button>
			</div>
		</div>
	);
};
