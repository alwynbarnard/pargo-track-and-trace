import "./TrackingBanner.css";
import React from "react";

export default function TrackTraceBanner() {
	return (
		<div>
			<div>
				<div>PARGO PARCEL TRACKING</div>
				<TrackingDescription details={trackingDescriptor} />
			</div>
		</div>
	);
}

function TrackingDescription(details) {
	return (
		<div className="tracking-description-container">
			{details.map((item) => {
				return (
					<>
						<img src={item.imageSource} alt={`${item.heading} icon`} />
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

const trackingDescriptor = [
	{
		imageSource: "../assets/PargoDeliversParcels.svg",
		heading: "Your parcel’s journey",
		descriptor:
			"The Pargo tracking functionality is detailed, real-time and simple. It has been developed for convenience to enable you to watch every part of your parcel’s journey. From the second your order leaves the warehouse or the drop-off point to the minute it arrives in your neighbourhood, every move of your parcel is recorded.",
	},
	{
		imageSource: "../assets/InYourOwnTime.svg",
		heading: "24/7 Tracking",
		descriptor:
			"Pargo’s tracking functionality can be accessed in real time, 24/7 on mobile or desktop. Your waybill number is your tracking number. It can be found in your email and sms notifications, which you will start receiving after the order has been finalised.",
	},
	{
		imageSource: "../assets/CustomerNotified.svg",
		heading: "Notifications",
		descriptor:
			"Throughout your parcels journey you will get several reminders via email and mobile.",
	},
	{
		imageSource: "../assets/SAASorPargoIntegration.svg",
		heading: "Pargo functionality",
		descriptor:
			"Pargo’s tracking functionality was developed with the customer in mind. It is reliable and intuitive. Should there be any questions with regards to tracking your parcel our customer service team is there to assist.",
	},
];
