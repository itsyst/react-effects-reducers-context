import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';

const Carts = () => {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<ul className="list-unstyled">
				{cartContext?.carts.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Carts;
