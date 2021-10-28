import React from "react";

export default function CardModal() {
	return (
		<div className="cart-modal" style={{ display: `none` }}>
			<p className="cart-title">Cart</p>
			<div>
				<div className="item-prev"></div>
				<div className="item-info">
					<p className="item-name">Fall Limited Edition Sneakers</p>
					<p className="item-quantity">$125.00 x $375.00</p>
				</div>
				<button className="del"></button>
			</div>
			<button className="checkout">Checkout</button>
		</div>
	);
}
