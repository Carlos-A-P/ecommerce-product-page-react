import React from "react";
import "../../styles/CardModal.style.css";

export default function CardModal({ openCart }) {
	return (
		<div className="cart-modal" style={openCart ? null : { display: `none` }}>
			<div className="top">
				<p className="cart-title">Cart</p>
				<p className="total-price">Total Price: $125.00</p>
			</div>
			<div className="bottom">
				<div className="occupied-cart" style={{ display: `block` }}>
					<div className="item-list">
						<div className="item">
							<div className="item-prev"></div>
							<div className="cart-item-info">
								<p className="item-name">Fall Limited Edition Sneakers</p>
								<p className="item-quantity">
									$125.00 x 3 <span>$375.00</span>
								</p>
							</div>
							<button className="del"></button>
						</div>
						<div className="item">
							<div className="item-prev"></div>
							<div className="cart-item-info">
								<p className="item-name">Fall Limited Edition Sneakers</p>
								<p className="item-quantity">
									$125.00 x 3 <span>$375.00</span>
								</p>
							</div>
							<button className="del"></button>
						</div>
					</div>
					<button className="checkout">Checkout</button>
				</div>
				<div className="empty-cart" style={{ display: `none` }}>
					<p>Your cart is empty</p>
				</div>
			</div>
		</div>
	);
}
