import { FC } from "react";
import { Advice, Town } from "../types";

interface ListProps {
	list: (Advice | Town)[];
}

const List: FC<ListProps> = ({ list }) => {
	return (
		<div className="list">
			{list.map((item, index) => {
				if ("title" in item) {
					return (
						<div key={index} className="list-item">
							<span className="list-item-title">&bull; {item.title}: </span>
							{item.description}
						</div>
					);
				} else {
					return (
						<div key={index} className="list-item town">
							<span className="list-item-title">
								{index + 1}. {item.name}
							</span>
							{item.aqi}
						</div>
					);
				}
			})}
		</div>
	);
};

export default List;
