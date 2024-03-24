import React, { useState } from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import MapMarkerIcon from "../assets/marker-default.png";
import locations from "../data/Locations";

export default function Map({ mapMarkerList }) {
	const [hue, setHue] = useState(0);
	const color = `hsl(${hue % 360}deg 39% 70%)`;
	const markerList = mapMarkerList === null ? locations : mapMarkerList;
	return (
		<div>
			<PigeonMap
				provider={osm}
				height={400}
				defaultCenter={[-26.18, 28.035]}
				defaultZoom={12}
			>
				{markerList.map((marker, index) => {
					return (
						<Marker
							width={50}
							anchor={[marker.latitude, marker.longitude]}
							color={color}
							onClick={() => setHue(hue + 20)}
							key={index}
						>
							<img src={MapMarkerIcon} alt="pargo map marker icon" />
						</Marker>
					);
				})}
			</PigeonMap>
		</div>
	);
}
