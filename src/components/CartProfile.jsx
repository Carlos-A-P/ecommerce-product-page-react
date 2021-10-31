// import React, { useState } from "react";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

export default function RightNav({ setOpenCart, state }) {
	// // open cart model
	// const [openCart, setOpenCart] = useState(false);

	// when function is call, set the state to the opposite of what it is currently
	console.log(state, "State outside of function");

	// let state = false;
	const toggleCart = (state) => {
		setOpenCart(!state);
		// debugger;
		state = !state;
		console.log(state);
		return state;
	};

	console.log(toggleCart);

	return (
		<div className="rightSide">
			<div className="cart-wrapper">
				<button
					className="cart"
					onClick={() => toggleCart(state)}
					aria-expanded={state ? "true" : "false"}
				>
					<img src={Cart} alt="cart" />
				</button>
				<span id="cart-count">3</span>
			</div>
			<button className="avatar" onClick={null} aria-expanded="false">
				<img src={Avatar} alt="profile" />
			</button>
		</div>
	);
}
