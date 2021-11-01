import React, { useState } from "react";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

export default function RightNav() {
	// open cart model
	const [openCart, setOpenCart] = useState(false);
	// debgugger;
	// when function is call, set the state to the opposite of what it is currently
	// const toggleFunction = () => {
	// 	setOpenCart(!openCart);
	// 	console.log(openCart);
	// };

	return {
		openCart,
		render: (
			<div className="rightSide">
				<div className="cart-wrapper">
					<button
						className="cart"
						onClick={
							(() => setOpenCart(!openCart), () => console.log(openCart))
						}
						aria-expanded={openCart ? "true" : "false"}
					>
						<img src={Cart} alt="cart" />
					</button>
					<span id="cart-count">3</span>
				</div>
				<button className="avatar" onClick={null} aria-expanded="false">
					<img src={Avatar} alt="profile" />
				</button>
			</div>
		),
	};
}
