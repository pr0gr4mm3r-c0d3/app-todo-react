import TaskComponent from '../components/TaskComponent';

export default function TasksView() {
	const texts = [
		'Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 Lorem ipsum dolor sit amet 1 .',
		'Lorem ipsum dolor sit amet 2 .',
		'Lorem ipsum dolor sit amet 3 .',
		'Lorem ipsum dolor sit amet 4 .',
		'Lorem ipsum dolor sit amet 5 .',
	];

	const list = () => <TaskComponent text='Lorem ipsum dolor sit amet.' />;
	return (
		<section className='px-3 flex flex-wrap justify-center gap-3 my-6 xl:max-w-5xl mx-auto'>
			{texts.map((text, index) => (
				<TaskComponent key={index} text={text} />
			))}
		</section>
	);
}
