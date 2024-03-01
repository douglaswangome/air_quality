import { FC } from "react";
import GaugeComponent from "react-gauge-component";

interface GaugeProps {
	value: number;
	minValue: number;
	maxValue: number;
}

const Gauge: FC<GaugeProps> = ({ value, minValue, maxValue }) => {
	return (
		<div className="gauge">
			<GaugeComponent
				type="semicircle"
				arc={{
					colorArray: ["#00FF15", "#FFFF15", "#FF2121", "#9933FF", "#8B01FF"],
					padding: 0.02,
					subArcs: [
						{ limit: 50 },
						{ limit: 100 },
						{ limit: 150 },
						{ limit: 200 },
						{ limit: 300 },
					],
				}}
				pointer={{ type: "blob", animationDelay: 0 }}
				value={value}
				minValue={minValue}
				maxValue={maxValue}
			/>
		</div>
	);
};

export default Gauge;
