import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
	icon: ReactNode;
	text: string;
	link?: string;
}

const MenuItem: FC<MenuItemProps> = ({ icon, text, link = "" }) => {
	if (link === "") {
		return (
			<div className="menu-item">
				<div className="icon">{icon}</div>
				<div className="text">{text}</div>
			</div>
		);
	} else {
		return (
			<Link to={link} className="menu-item">
				<div className="icon">{icon}</div>
				<div className="text">{text}</div>
			</Link>
		);
	}
};

export default MenuItem;
