import React, { useState } from "react";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

export default function RightNav() {
	return (
		<div className="rightSide">
			<div className="cart-wrapper">
				<button className="cart" onClick={null} aria-expanded="false">
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
