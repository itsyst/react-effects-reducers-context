import { Users } from './components/admin';
import { CartProvider } from './components/cart';
import { Counters } from './components/counters';
import { MovieList } from './components/movies';
import { TaskList } from './components/tasks';
import useDocumentTitle from './components/utils/useDocumentTitle';

function App() {
	useDocumentTitle('E-R-H-C');
	return (
		<CartProvider>
			<div className="App">
				<Counters title="Counters" />
				<Users title="Users" />
				<MovieList title="Movies" />
				<TaskList />
			</div>
		</CartProvider>
	);
}

export default App;
