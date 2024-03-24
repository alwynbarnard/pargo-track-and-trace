import Map from "./Map";
import "./TrackingBanner.css";
import "rsuite/dist/rsuite.min.css";
import React, { useState } from "react";
import { useTracking } from "../data/TrackingContext";
import { Timeline } from "rsuite";
import {
	faTruck,
	faCreditCard,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrackingBanner() {
	const [waybill, setWaybill] = useState("");
	const { tracking, toggleTracking } = useTracking();
	const [isError, setIsError] = useState(false);

	function handleTracking() {
		if (waybill === "" || waybill === " ") {
			setIsError(true);
		} else {
			toggleTracking();
			setIsError(false);
		}
	}
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
				onChange={(e) => setWaybill(e.target.value)}
			/>
			<button className="track-btn" onClick={handleTracking}>
				Track
			</button>
			<p className={`error ${isError ? "" : "hide"}`}>
				Please enter a valid waybill number or contact support
			</p>

			<div className={`map-container ${tracking ? "hide" : ""}`}>
				<Map mapMarkerList={null} />
			</div>

			<div className={`map-container ${tracking ? "track-map" : "hide"}`}>
				<Map mapMarkerList={twoRandomLocationsAsParcel} />
				<ParcelDetails />
			</div>
		</div>
	);
}

function ParcelDetails() {
	return (
		<div>
			<p className="parcel-header">Order Tracking</p>
			<Timeline align="left">
				<Timeline.Item
					dot={<FontAwesomeIcon className="parcel-icon" icon={faCreditCard} />}
					key="creditcard"
				>
					<p className="parcel-time">March 1, 10:20</p>
					<p>Your order is processed</p>
				</Timeline.Item>
				<Timeline.Item
					dot={<FontAwesomeIcon className="parcel-icon" icon={faTruck} />}
					key="truck"
				>
					<p className="parcel-time">March 4, 09:44</p>
					<p>Your order is shipped and enroute to the delivery destination</p>
				</Timeline.Item>
				<Timeline.Item
					dot={<FontAwesomeIcon className="parcel-icon" icon={faUser} />}
					key="check"
				>
					<p className="parcel-time">March 4, 16:44</p>
					<p>Your order was droped off at your selected Pargo Pickup Point</p>
				</Timeline.Item>
				<Timeline.Item className="active" key="user">
					<p>Your order can be collected at your selected Pargo Pickup Point</p>
				</Timeline.Item>
			</Timeline>
		</div>
	);
}

const twoRandomLocationsAsParcel = [
	{
		name: "Johannesburg Zoo",
		latitude: -26.1553,
		longitude: 28.0348,
	},
	{
		name: "Constitution Hill",
		latitude: -26.1945,
		longitude: 28.0402,
	},
];
