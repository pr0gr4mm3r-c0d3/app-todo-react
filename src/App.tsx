import logo from './logo.svg';

import './index.css';
import './App.css';

import TasksView from './modules/task/views/TasksView';

function App() {
	return (
		<div className='App' data-theme='night'>
			<header className='bg-primary-content flex flex-wrap justify-between items-center'>
				<p className='font-bold text-5xl px-10'>Todo</p>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<div id='wrapper' className='container mx-auto py-6'>
				<section>
					<form>
						<div className='flex flex-wrap justify-center items-center gap-y-5 gap-x-3'>
							<input
								type='text'
								placeholder='Type New Task'
								className='input input-lg input-info w-full bg-info-content max-w-sm md:max-w-md'
							/>
							<div className='flex :w-full :px-12 justify-end'>
								<button className='btn btn-primary'>
									Add Task
								</button>
							</div>
						</div>
					</form>
				</section>
				<section>
					<TasksView />
				</section>
			</div>
		</div>
	);
}

export default App;
