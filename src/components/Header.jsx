import React from "react";
import Nav from "./Nav/Nav";

export default function Header() {
	return (
		<header>
			<NavContainer>
				<NavMenu />
				<NavCheckout />
			</NavContainer>
		</header>
	);
}
