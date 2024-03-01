import { FC } from "react";
// React MUI Line Chart
import { LineChart } from "@mui/x-charts/LineChart";

const Graph: FC = () => {
	const aqi: number[] = [
		10, 20, 24, 30, 23, 25, 30, 35, 34, 70, 67, 70, 63, 60, 60, 68, 70, 72, 77,
		60, 55, 40, 30, 20,
	];
	const xLabels: string[] = [
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
	];
	return (
		<div className="graph">
			<LineChart
				axisHighlight={{ x: "line", y: "line" }}
				series={[{ data: aqi, label: "aqi" }]}
				xAxis={[{ scaleType: "point", data: xLabels }]}
				yAxis={[{ scaleType: "linear" }]}
			/>
		</div>
	);
};

export default Graph;
