import { TIdModal } from 'app/src/types/TIdModal';

type Props = {
	resetData?: () => void;
};

export const BtnCancelModal = ({ resetData }: Props) => {
	return (
		<label htmlFor='modal' className='btn btn-accent' onClick={resetData}>
			Cancel
		</label>
	);
};
