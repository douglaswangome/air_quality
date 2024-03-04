import { FC } from "react";
// React MUI Line Chart
import { LineChart } from "@mui/x-charts/LineChart";

export interface GraphProps {
	type?: "line" | "bar";
	tickMaxStep: number;
	series: { label: string; data: number[] }[];
	xLabels: string[];
}

const Graph: FC<GraphProps> = ({
	series,
	xLabels,
	type = "line",
	tickMaxStep,
}) => {
	if (type === "line") {
		return (
			<div className="graph">
				<LineChart
					axisHighlight={{ x: "line", y: "line" }}
					series={[...series]}
					xAxis={[{ scaleType: "point", data: xLabels }]}
					yAxis={[{ scaleType: "linear", tickMaxStep, min: 0 }]}
				/>
			</div>
		);
	}
};

export default Graph;
