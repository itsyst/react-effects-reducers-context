import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Users from './components/admin/Users';
import Counters from './components/counters/Counters';
import MovieList from './components/movies/MovieList';
import TaskList from './components/tasks/TaskList';
import useDocumentTitle from './hooks/useDocumentTitle';
import CartProvider from './providers/CartProvider';
import UserProvider from './providers/UserProvider';

function App() {
	useDocumentTitle('Hooks-Effects');
	return (
		<CartProvider>
			<UserProvider>
				<div className="App">
					<Counters title="Counters" />
					<Users title="Users" />
					<MovieList title="Movies" />
					<TaskList />
				</div>
			</UserProvider>
		</CartProvider>
	);
}

export default App;
