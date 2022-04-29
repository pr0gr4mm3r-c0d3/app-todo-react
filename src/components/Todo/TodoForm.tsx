import { useForm } from '../../hooks';

type Props = {};

export const TodoForm = ({}: Props) => {
	const { newTodo, addTaskHandler, changeInputHandler } = useForm();

	return (
		<>
			<input type='checkbox' id='my-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-4xl'>Add Task</h3>
					<div className='py-8'>
						<form className='grid gap-5' onSubmit={addTaskHandler}>
							<input
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
								<label
									htmlFor='my-modal'
									className='btn btn-accent'
								>
									Cancel
								</label>
								<button
									type='submit'
									className='btn btn-primary'
								>
									Add Task
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
