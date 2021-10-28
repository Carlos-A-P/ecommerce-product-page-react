import React, { useState } from "react";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

export default function RightNav() {
	return (
		<div className="rightSide">
			<button className="cart" onClick={null} aria-expanded="false">
				<img src={Cart} alt="cart" />
			</button>
			<button className="avatar" onClick={null} aria-expanded="false">
				<img src={Avatar} alt="profile" />
			</button>
		</div>
	);
}
