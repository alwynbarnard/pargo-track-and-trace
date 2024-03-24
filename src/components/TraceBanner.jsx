import "./TraceBanner.css";
import React from "react";
import trackingDescriptor from "../data/TrackingDetails";

export default function TraceBanner() {
	return (
		<div className="trace-banner">
			<div>
				<div className="header">PARGO PARCEL TRACKING</div>
				<TrackingDescription details={trackingDescriptor} />
			</div>
		</div>
	);
}

function TrackingDescription({ details }) {
	return (
		<div className="tracking-description-container">
			{details.map((item) => {
				return (
					<>
						<img
							className="trace-icon"
							src={item.imageSource}
							alt={`${item.heading} icon`}
						/>
						<div className="tdc-text-container">
							<em>{item.heading}</em>
							<p>{item.descriptor}</p>
						</div>
					</>
				);
			})}
		</div>
	);
}
