import { FC } from "react";
// Components
import Header from "../components/Header";
import Map from "../components/Map";
import Card from "../components/Card";
import {
	BsCloudHaze2,
	BsMoisture,
	BsSpeedometer2,
	BsThermometerHalf,
} from "react-icons/bs";
import Gauge from "../components/Gauge";
import Graph from "../components/Graph";
import List from "../components/List";

// Data
import { tips } from "../data/tips.json";
import { towns } from "../data/towns.json";

const Dashboard: FC = () => {
	return (
		<>
			<Header />
			<div className="dashboard">
				<Map />
				<div className="row main-row">
					<div className="environment">
						<span className="underline">environmental data</span>
						<div className="cards">
							<Card
								value={43}
								unit="μg/m3"
								category="PM"
								icon={<BsCloudHaze2 />}
							/>
							<Card
								value={25}
								unit="°C"
								category="temperature"
								icon={<BsThermometerHalf />}
							/>
							<Card
								value={76}
								unit="%"
								category="humidity"
								icon={<BsMoisture />}
							/>
							<Card
								value={1013}
								unit="hPa"
								category="air pressure"
								icon={<BsSpeedometer2 />}
							/>
						</div>
					</div>
					<div className="aqi">
						<span className="underline">air quality index</span>
						<div className="content">
							<Gauge value={48} minValue={0} maxValue={300} />
						</div>
						<div className="foot-note">
							Good. Air quality is satisfactory, and air pollution poses little
							or no risk.
						</div>
					</div>
				</div>
				<div className="row secondary-row">
					<div className="chart">
						<span className="underline">Today's AQI</span>
						<Graph
							type="line"
							series={[
								{
									label: "AQI",
									data: [
										10, 20, 24, 30, 23, 25, 30, 35, 34, 70, 67, 70, 63, 60, 60,
										68, 70, 72, 77, 60, 55, 40, 30, 20,
									],
								},
							]}
							xLabels={[
								"00:00",
								"01:00",
								"02:00",
								"03:00",
								"04:00",
								"05:00",
								"06:00",
								"07:00",
								"08:00",
								"09:00",
								"10:00",
								"11:00",
								"12:00",
								"13:00",
								"14:00",
								"15:00",
								"16:00",
								"17:00",
								"18:00",
								"19:00",
								"20:00",
								"21:00",
								"22:00",
								"23:00",
							]}
						/>
					</div>
					<div className="locations">
						<span className="underline">Locations</span>
						<List list={towns} />
					</div>
					<div className="tips">
						<span className="underline">Health Tips</span>
						<List list={tips.hazardous} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
