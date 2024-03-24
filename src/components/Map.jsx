import React, { useState } from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import MapMarkerIcon from "../assets/marker-default.png";

export default function Map() {
	const [hue, setHue] = useState(0);
	const color = `hsl(${hue % 360}deg 39% 70%)`;
	return (
		<div>
			<PigeonMap
				provider={osm}
				height={400}
				defaultCenter={[50.879, 4.6997]}
				defaultZoom={11}
			>
				<Marker
					width={50}
					anchor={[50.879, 4.6997]}
					color={color}
					onClick={() => setHue(hue + 20)}
				>
					<img src={MapMarkerIcon} alt="map marker icon" />
				</Marker>
			</PigeonMap>
		</div>
	);
}
