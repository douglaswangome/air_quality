import { FC } from "react";
// Components
import Header from "../components/Header";
import Map from "../components/Map";

const Dashboard: FC = () => {
	return (
		<>
			<Header />
			<div className="dashboard">
				<Map />
				<div className="row main-row">
					<div className="environment">
						<span className="underline">environmental data</span>
					</div>
					<div className="aqi">aqi</div>
				</div>
				<div className="row secondary-row">
					<div className="chart">chart</div>
					<div className="tips">health tips</div>
					<div className="locations">locations</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
