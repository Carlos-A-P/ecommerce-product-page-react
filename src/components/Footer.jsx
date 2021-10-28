import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterAtt = styled.footer`
	.attribution {
		font-size: 11px;
		text-align: center;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
`;

export default function Footer() {
	return (
		<FooterAtt>
			<div class="attribution">
				Challenge by{" "}
				<Link
					to={{ pathname: "https://www.frontendmentor.io/profile/Carlos-A-P" }}
					target="_blank"
				>
					Frontend Mentor
				</Link>
				. Coded by{" "}
				<Link
					to={{ pathname: "https://carlospwd.netlify.app/" }}
					target="_blank"
				>
					Carlos Perez
				</Link>
				.
			</div>
		</FooterAtt>
	);
}
