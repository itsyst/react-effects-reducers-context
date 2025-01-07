import { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import TasksContext from '../../contexts/tasksContext';

const NavbarTask = () => {
	const { tasks } = useContext(TasksContext);
	return (
		<Navbar className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#">
					<img
						alt="Tasks Count"
						src="/src/assets/icon.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					Tasks Count{' '}
					<span className="badge text-bg-secondary">{tasks.length}</span>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavbarTask;
