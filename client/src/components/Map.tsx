import { FC, useRef } from "react";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";

const Map: FC = () => {
	const mapRef = useRef(null);
	const coords: { lat: number; lon: number } = {
		lat: -1.1018,
		lon: 37.0144,
	};

	return (
		<div className="map">
			<MapContainer
				center={[coords.lat, coords.lon]}
				zoom={15}
				scrollWheelZoom={false}
				style={{ height: "100%", width: "100%" }}
				ref={mapRef}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<CircleMarker
					center={[coords.lat, coords.lon]}
					pathOptions={{ color: "red" }}
				>
					<Tooltip direction="bottom" offset={[0, 0]} opacity={1}>
						123
					</Tooltip>
				</CircleMarker>
			</MapContainer>
		</div>
	);
};

export default Map;
