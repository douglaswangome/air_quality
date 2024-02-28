import { FC, ReactNode } from "react";

interface CardProps {
	value: number;
	unit: string;
	category: string;
	icon: ReactNode;
}

const Card: FC<CardProps> = ({ value, unit, category, icon }) => {
	return (
		<div className="card">
			{icon}
			<div className="card-content">
				<div className="card-values">
					<span className="value">{value}</span>
					<span className="unit">({unit})</span>
				</div>
				<span className="category">{category}</span>
			</div>
		</div>
	);
};

export default Card;
