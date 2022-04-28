import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
type Props = {
	text: string;
};

type State = {};

export default function TaskComponent({ text }: Props) {
	return (
		<>
			<div className='card w-full bg-white text-primary-content'>
				<div className='flex justify-between p-4'>
					<h2 className='card-title'>{text}</h2>
					<div className='card-actions :flex-col justify-items-start'>
						<button className='rounded p-4 btn-primary'>
							<FaCheck />
						</button>
						<button className='rounded p-4 bg-green-500'>
							<FaEdit />
						</button>
						<button className='rounded p-4 bg-red-500 text-white'>
							<FaTrash />
						</button>
					</div>
				</div>
			</div>
			<div className='card card-side w-full border-0 bg-slate-200 text-primary-content shadow-5xl'>
				<div className='flex justify-center bg-primary-content items-center px-10'>
					<FaCheck className='text-white' />
				</div>

				<div className='card-body'>
					<div className='flex gap-2 justify-between'>
						<h2 className='card-title'>{text}</h2>

						<div className='card-actions :flex-col justify-end'>
							<button className='rounded p-4 btn-primary'>
								<FaCheck />
							</button>
							<button className='rounded p-4 bg-green-500'>
								<FaEdit />
							</button>
							<button className='rounded p-4 bg-red-500 text-white'>
								<FaTrash />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
