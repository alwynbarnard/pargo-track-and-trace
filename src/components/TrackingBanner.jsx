import "./TrackingBanner.css";
import React from "react";

export default function TrackingBanner() {
	return (
		<div className="tracking-banner">
			<p className="tracking-header">Track your parcel</p>
			<p className="tracking-description">
				Track your order by entering your waybill number
			</p>
			<input
				className="search-bar"
				type="text"
				placeholder="Waybill Number..."
			/>
		</div>
	);
}
