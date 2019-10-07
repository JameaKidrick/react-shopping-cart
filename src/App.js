import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// MAKING FUNCTION TO ALLOW USER TO ADD ITEMS TO CART
		// NEED TO MAKE AN OBJECT WITH THE PROPERTIES THAT THIS NEW ITEM WILL HAVE <NEWITEM>
		// SETCART AS WHATEVER IS IN THE CARD PLUS THE NEW ITEM WE ADD TO IT
	const addItem = item => {
		const newItem = {
			id: Date.now(),
			title: item.title,
			price: item.price,
			image: item.image
		};
		setCart([...cart, newItem]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
