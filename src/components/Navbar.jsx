import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Close from "../assets/images/icon-close.svg";
import Hamburger from "../assets/images/icon-menu.svg";

export default function Navbar() {
	//

	return (
		<>
			<header>
				<div className="navbar">
					<div className="leftSide">
						<img className="hamburger" src={Hamburger} alt="open menu" />
						<img src={Logo} alt="logo" />
						<div className="links">
							<img className="closeNav" src={Close} alt="close navbar" />
							<div>
								<Link to="/">Collections</Link>
								<Link to="/">Men</Link>
								<Link to="/">Women</Link>
								<Link to="/">About</Link>
								<Link to="/">Contact</Link>
							</div>
						</div>
					</div>
					<div className="rightSide">
						<button className="cart" onClick={null}>
							<img src={Cart} alt="cart" />
						</button>
						<button className="avatar" onClick={null}>
							<img src={Avatar} alt="profile" />
						</button>
					</div>
				</div>
			</header>
		</>
	);
}
