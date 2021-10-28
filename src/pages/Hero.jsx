import React from "react";
import CardModal from "../components/modals/CardModal";
import ProfileModal from "../components/modals/ProfileModal";
import Image from "../assets/images/image-product-1.jpg";
import PrevBtn from "../assets/images/icon-previous.svg";
import NextBtn from "../assets/images/icon-next.svg";
import "../styles/Hero.css";

export default function Hero() {
	return (
		<main>
			<div className="gallery">
				<div className="main-image">
					<img src={Image} alt="item image" />
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
					<div className="img img-1"></div>
					<div className="img img-2"></div>
					<div className="img img-3"></div>
					<div className="img img-4"></div>
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
							<p className="quantity"></p>
							<button className="add"></button>
						</div>
						<button className="add-to-cart"></button>
					</div>
				</div>
			</div>
			<CardModal />
			<ProfileModal />
		</main>
	);
}
