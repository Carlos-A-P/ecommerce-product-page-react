import React from "react";
import styled from "styled-components";

export default function FooterComp() {
	return (
		<>
			<Footer>
				<Attribution>
					Challenge by Frontend Mentor
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="#">Carlos Perez</a>.
				</Attribution>
			</Footer>
		</>
	);
}

const Footer = styled.footer`
	text-align: center;
`;
const Attribution = styled.div`
	font-size: 11px;
	text-align: center;
	a {
		color: hsl(228, 45%, 44%);
	}
`;
