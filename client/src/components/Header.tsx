import { FC } from "react";
import MenuItem from "./MenuItem";
import { BsBell, BsCalendar3 } from "react-icons/bs";
import { GiFootprint } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { ImLeaf } from "react-icons/im";

const Header: FC = () => {
	return (
		<div className="header">
			<span className="logo">AQI Dashboard</span>
			<div className="icons">
				<div className="pages">
					<MenuItem icon={<RxDashboard />} text="Dashboard" link="/" />
					<MenuItem icon={<ImLeaf />} text="Air Quality" />
					<MenuItem icon={<GiFootprint />} text="Carbon Footprint" />
				</div>
				<div className="profiles">
					<MenuItem icon={<BsCalendar3 />} text="Calendar" />
					<MenuItem icon={<BsBell />} text="Notifications" />
				</div>
				<div className="user">
					<img src="https://avatars.steamstatic.com/3973facfb777a96efbbc16b679e8b61d6d9090e0_full.jpg" />
					<div className="details">
						<span className="welcome">Welcome back</span>
						<span className="name">John Doe</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
