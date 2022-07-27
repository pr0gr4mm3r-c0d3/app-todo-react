import { ReactNode } from 'react';

type Props = {
	title: string;
	modalCleaned: () => void;
	children: ReactNode;
};

export const ModalWrapper = ({ title, modalCleaned, children }: Props) => {
	const handlerClickCloseModal = modalCleaned;
	return (
		<>
			<input type='checkbox' id='modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					<label
						id='btn__close'
						htmlFor='modal'
						className='btn btn-md btn-circle absolute right-4 top-4'
						onClick={handlerClickCloseModal}
					>
						✕
					</label>
					<h3 className='font-bold text-4xl'>{title}</h3>
					<div className='py-8'>{children}</div>
				</div>
			</div>
		</>
	);
};
