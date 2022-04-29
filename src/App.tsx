import './index.css';
import './App.css';

import { TasksView } from './views';
import { TodoForm, Navbar } from './components';
import { TodoProvider } from './context';

function App() {
	return (
		<div className='App' data-theme='night'>
			<Navbar />
			<div id='wrapper' className='container mx-auto py-6 px-2'>
				<div className='flex justify-end'>
					<label
						htmlFor='my-modal'
						className='btn btn-primary btn-lg modal-button'
					>
						Add Task
					</label>
				</div>
				<TodoProvider>
					<TasksView />
					<TodoForm />
				</TodoProvider>
			</div>
		</div>
	);
}

export default App;
