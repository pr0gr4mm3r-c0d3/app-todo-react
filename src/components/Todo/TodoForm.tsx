import { useEffect } from 'react';
import { useForm } from '../../hooks';
import { BtnCancelModal } from '../modal/BtnCancelModal';

type Props = { taskId: number };

export const TodoForm = ({ taskId }: Props) => {
	const {
		newTodo,
		loadTodoInForm,
		addTaskHandler,
		changeInputHandler,
		resetNewTodo,
	} = useForm();

	const checkTaskId = taskId === -1;
	useEffect(() => {
		!checkTaskId && loadTodoInForm(taskId);
	}, [taskId]);

	return (
		<>
			<form className='grid gap-5' onSubmit={addTaskHandler}>
				<input
					id='input__title'
					type='text'
					placeholder='Title Task'
					className='input input-info w-full bg-info-content'
					name='title'
					value={newTodo.title}
					onChange={changeInputHandler}
				/>
				<textarea
					name='description'
					className='textarea textarea-info bg-info-content'
					placeholder='Description Task'
					value={newTodo.description}
					onChange={changeInputHandler}
				></textarea>
				<div className='modal-action justify-between'>
					<BtnCancelModal resetData={resetNewTodo} />

					<button type='submit' className='btn btn-primary'>
						{checkTaskId ? 'Add Task' : 'Save Task'}
					</button>
				</div>
			</form>
		</>
	);
};
