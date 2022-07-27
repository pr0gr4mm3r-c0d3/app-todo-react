import './index.css';
import './App.css';

import { TasksView } from './views';
import { Navbar } from './components';
import { TodoProvider } from './context';

function App() {
	return (
		<div className='App' data-theme='night'>
			<Navbar />
			<div id='wrapper' className='container mx-auto py-6 px-2'>
				<TodoProvider>
					<TasksView />
				</TodoProvider>
			</div>
		</div>
	);
}

export default App;
