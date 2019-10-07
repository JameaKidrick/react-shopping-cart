import React, { useState, useEffect } from 'react';

const Item = props => {
	const [cart, setCart] = useState([])

	useEffect(() => {
		
	})

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

// props.removeItem(props.item.id)
