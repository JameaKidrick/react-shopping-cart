import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'

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
		setCart([...cart, item]);
	};

	const removeItem = item => {
		const deletedItem = cart.filter(element => {
			return item !== element.id
		})
			setCart([...cart], deletedItem)
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route
						path="/cart" component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
