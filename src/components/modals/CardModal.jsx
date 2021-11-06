import React from "react";
import "../../styles/CardModal.style.css";
import { useSelector, useDispatch } from "react-redux";
import { remove_items } from "../../actions";

const CardModal = React.forwardRef((props, cartRef) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems);

	const deleteItem = () => {
		dispatch(remove_items(...cartItems));
	};

	return (
		<div className="cart-modal" ref={cartRef}>
			<div className="top">
				<p className="cart-title">Cart</p>
				<p className="total-price">Total Price: $125.00</p>
			</div>
			<div className="bottom">
				{cartItems.length === 0 ? (
					<div className="empty-cart">
						<p>Your cart is empty</p>
					</div>
				) : (
					<div className="occupied-cart">
						<div className="item-list">
							{cartItems.map((item) => {
								return (
									<div className="item" id={item.id}>
										<div className="item-prev"></div>
										<div className="cart-item-info">
											<p className="item-name">Fall Limited Edition Sneakers</p>
											<p className="item-quantity">
												$125.00 x {item.added_items}{" "}
												<span>${item.total_price}.00</span>
											</p>
										</div>
										<button className="del" onClick={deleteItem}></button>
									</div>
								);
							})}
						</div>
						<button className="checkout">Checkout</button>
					</div>
				)}

				{/* <div className="empty-cart" style={{ display: `none` }}>
					<p>Your cart is empty</p>
				</div> */}
			</div>
		</div>
	);
});

// forwarding the reference into my component
// const forwardCardModal = React.forwardRef(CardModal);

export default CardModal;
