import { useTodos } from 'src/hooks';
import { BtnCancelModal } from '../modal/BtnCancelModal';

type Props = {
	id?: number;
};

export const ModalDelete = ({ id }: Props) => {
	const { deleteTodo } = useTodos();
	const deleteHandler = () => deleteTodo(id!);

	return (
		<>
			<div className='py-8'>
				<h4>Are you sure ????</h4>
				<div className='modal-action justify-between'>
					<BtnCancelModal />
					<label
						htmlFor='modal'
						onClick={deleteHandler}
						className='btn modal-button btn-error '
					>
						Delete
					</label>
				</div>
			</div>
		</>
	);
};
