import React from "react";
import { Link } from "react-router-dom";

export default function ProfileModal() {
	return (
		<div className="profile-modal" style={{ display: `none` }}>
			<p className="profile">Profile</p>
			<div className="list">
				<Link to="/">Profile</Link>
				<Link to="/">Settings</Link>
				<Link to="/">Purchase History</Link>
			</div>
		</div>
	);
}
