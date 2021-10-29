import React from "react";
import Image from "../assets/images/image-product-1.jpg";
import ClosePrev from "../assets/images/icon-close.svg";
import PrevBtn from "../assets/images/icon-previous.svg";
import NextBtn from "../assets/images/icon-next.svg";
import MinBtn from "../assets/images/icon-minus.svg";
import PlusBtn from "../assets/images/icon-plus.svg";
import "../styles/Hero.css";

export default function Hero() {
	return (
		<main>
			<div className="gallery">
				<button className="main-image">
					<img className="previewed-img" src={Image} alt="item image" />
					<div className="navigation-btns">
						<button className="prev">
							<img src={PrevBtn} alt="previous button" />
						</button>
						<button className="next">
							<img src={NextBtn} alt="next button" />
						</button>
					</div>
				</button>
				<div className="photo-options">
					<button className="img img-1 selected"></button>
					<button className="img img-2"></button>
					<button className="img img-3"></button>
					<button className="img img-4"></button>
				</div>
			</div>
			<div className="description">
				<div className="info">
					<p className="company">Sneaker Company</p>
					<h1>Fall Limited Edition Sneakers</h1>
					<p className="item-info">
						{" "}
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
					<div className="price-tag">
						<div className="price">$125.00</div>
						<div className="retail-price">$250.00</div>
					</div>
					<div className="description-btn">
						<div className="quantity-wrapper">
							<button className="min"></button>
							<p className="quantity">0</p>
							<button className="add"></button>
						</div>
						<button className="add-to-cart">
							<span>Add to cart</span>
						</button>
					</div>
				</div>
			</div>
			<div className="images-modal">
				<div className="wrapper">
					<div className="modal-gallery">
						<button className="close-btn">
							<img src={ClosePrev} alt="close" />
						</button>
						<div className="modal-preview">
							<img className="previewed-img" src={Image} alt="item image" />
							<div className="navigation-btns">
								<button className="prev">
									<img src={PrevBtn} alt="previous button" />
								</button>
								<button className="next">
									<img src={NextBtn} alt="next button" />
								</button>
							</div>
						</div>
						<div className="photo-options">
							<button className="img img-1 selected"></button>
							<button className="img img-2"></button>
							<button className="img img-3"></button>
							<button className="img img-4"></button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
