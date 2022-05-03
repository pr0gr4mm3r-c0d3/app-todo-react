import { useTodos } from 'src/hooks';

type Props = { id?: number };

export const ModalDelete = ({ id }: Props) => {
	const { deleteTodo } = useTodos();
	const deleteHandler = () => deleteTodo(id!);

	return (
		<>
			<input type='checkbox' id='modal-delete' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-4xl'>Delete Task</h3>
					<div className='my-8'>
						<h4>Are you sure ????</h4>
						<div className='modal-action justify-between'>
							<label
								htmlFor='modal-delete'
								className='btn btn-accent'
							>
								Cancel
							</label>
							<button
								onClick={deleteHandler}
								className='btn bg-red-500'
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
