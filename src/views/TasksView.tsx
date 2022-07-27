import { useTodos } from 'src/hooks';
import { ModalDelete, ModalWrapper, TodoForm, TodoTask } from 'src/components';
import { useState } from 'react';
import { TIdModal } from '../types/TIdModal';
import { focusInInput } from '../utils/FocusInInput';

interface IIds {
	idModal: TIdModal;
	idTask: number;
}

const INITIAL_IDS_STATE: IIds = { idModal: 'modalCleaned', idTask: -1 };
export const TasksView = () => {
	const { todos } = useTodos();
	const [ids, setIds] = useState<IIds>(INITIAL_IDS_STATE);
	const [titleModal, setTitleModal] = useState<string>('Add To Task');

	const getIdTask = (id: number, action: 'delete' | 'edit') => {
		console.log('id Task', id);
		const actionIsDelete = action === 'delete';
		setIds({
			idModal: actionIsDelete ? 'modalToDelete' : 'modalToEdit',
			idTask: id,
		});
		setTitleModal(`${actionIsDelete ? 'Delete' : 'Edit'} Task`);
		!actionIsDelete && focusInInput();
	};
	const handlerClickAddToTaskBtnModal = () => {
		setTitleModal('Add To Task');
		setIds({ ...INITIAL_IDS_STATE, idModal: 'modalToAdd' });
		focusInInput();
	};

	const modalCleaned = () => {
		console.log(ids);
		setIds(INITIAL_IDS_STATE);
	};
	return (
		<>
			<div className='flex justify-end'>
				<label
					onClick={handlerClickAddToTaskBtnModal}
					htmlFor='modal'
					className='btn btn-primary btn-lg modal-button'
				>
					Add Task
				</label>
			</div>

			{todos.length > 0 ? (
				<>
					<section className='grid gap-5 md:grid xl:grid-cols-2 my-6'>
						{todos.map((todo) => (
							<TodoTask
								key={todo.id}
								task={todo}
								getIdTask={getIdTask}
							/>
						))}
					</section>
				</>
			) : (
				<>
					<h2 className='py-8 text-5xl md:text-8xl text-center text-red-500'>
						☹️ Not Tasks ☹️
					</h2>
				</>
			)}

			<ModalWrapper title={titleModal} modalCleaned={modalCleaned}>
				{ids.idModal === 'modalToDelete' ? (
					<ModalDelete id={ids.idTask} />
				) : (
					ids.idModal !== 'modalCleaned' && (
						<TodoForm taskId={ids.idTask} />
					)
				)}
			</ModalWrapper>
		</>
	);
};
