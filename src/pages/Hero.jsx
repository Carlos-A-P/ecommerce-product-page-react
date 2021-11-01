import React, { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import ClosePrev from "../assets/images/icon-close.svg";
import PrevBtn from "../assets/images/icon-previous.svg";
import NextBtn from "../assets/images/icon-next.svg";
import MinBtn from "../assets/images/icon-minus.svg";
import PlusBtn from "../assets/images/icon-plus.svg";
import "../styles/Hero.css";

export default function Hero() {
	const [itemQuantity, setItemQuantity] = useState(0);
	const incNum = () => {
		setItemQuantity(itemQuantity + 1);
	};
	const decNum = () => {
		if (itemQuantity > 0) {
			setItemQuantity(itemQuantity - 1);
		} else {
			setItemQuantity(0);
		}
	};

	// desktop gallery modal
	const [photoModal, setPhotoModal] = useState(false);
	const togglePhotoModal = () => {
		setPhotoModal(!photoModal);
	};

	// set active images in modal and preview view
	const galleryArray = [Image1, Image2, Image3, Image4];

	const [activeImage, setActiveImage] = useState(galleryArray[0]);
	const adjustActiveImage = (index) => {
		setActiveImage(index);
	};

	const [activeModalImage, setActiveModalImage] = useState(activeImage);
	const adjustActiveModalImage = (index) => {
		setActiveModalImage(index);
	};

	// navigation button function
	const [imageNav, setImgNav] = useState(0);
	const nextImg = () => {
		setImgNav(imageNav + 1);
		setActiveModalImage(galleryArray[imageNav + 1]);
	};
	const prevImg = () => {
		if (imageNav > 0) {
			setImgNav(imageNav - 1);
		} else {
			setImgNav(0);
		}
	};

	return (
		<main>
			<div className="gallery">
				<button className="main-image" onClick={togglePhotoModal}>
					<img className="previewed-img" src={activeImage} alt="item image" />
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
					<button
						className={`img img-1 ${activeImage === Image1 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[0])}
					></button>
					<button
						className={`img img-2 ${activeImage === Image2 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[1])}
					></button>
					<button
						className={`img img-3 ${activeImage === Image3 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[2])}
					></button>
					<button
						className={`img img-4 ${activeImage === Image4 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[3])}
					></button>
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
						<p className="price">$125.00</p>
						<p className="retail-price">$250.00</p>
					</div>
					<div className="description-btn">
						<div className="quantity-wrapper">
							<button className="min" onClick={decNum}></button>
							<p className="quantity">{itemQuantity}</p>
							<button className="add" onClick={incNum}></button>
						</div>
						<button className="add-to-cart">
							<span>Add to cart</span>
						</button>
					</div>
				</div>
			</div>
			<div
				className="images-modal"
				style={photoModal ? null : { display: `none` }}
			>
				<div className="wrapper">
					<div className="modal-gallery">
						<button className="close-btn" onClick={togglePhotoModal}>
							<img src={ClosePrev} alt="close" />
						</button>
						<div className="modal-preview">
							<img
								className="previewed-img"
								src={activeModalImage}
								alt="item image"
							/>
							<div className="navigation-btns">
								<button className="prev" onClick={prevImg}>
									<img src={PrevBtn} alt="previous button" />
								</button>
								<button className="next" onClick={nextImg}>
									<img src={NextBtn} alt="next button" />
								</button>
							</div>
						</div>
						<div className="photo-options">
							<button
								className={`img img-1 ${
									activeModalImage === Image1 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image1)}
							></button>
							<button
								className={`img img-2 ${
									activeModalImage === Image2 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image2)}
							></button>
							<button
								className={`img img-3 ${
									activeModalImage === Image3 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image3)}
							></button>
							<button
								className={`img img-4 ${
									activeModalImage === Image4 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image4)}
							></button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
