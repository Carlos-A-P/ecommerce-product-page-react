import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProfileModal.style.css";

export default function ProfileModal() {
	return (
		<div className="profile-modal" style={{ display: `none` }}>
			<p className="top">Profile</p>
			<div className="bottom">
				<div className="list">
					<Link to="/">Profile</Link>
					<Link to="/">Settings</Link>
					<Link to="/">Purchase History</Link>
				</div>
				<button className="log-out">Log-out</button>
			</div>
		</div>
	);
}
