import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
	const [selectedMenu, setSelectedMenu] = useState(1);

	const menuItems = [
		{ id: 1, label: "Principal", path: "/" },
		{ id: 2, label: "CV", path: "/cv" },
		{ id: 3, label: "Demo", path: "/demo" },
		{ id: 4, label: "GitHub", path: "/github" },
		{ id: 5, label: "Contacto", path: "/contacto" },
	];

	const handleSelectMenu = (id: number) => {
		setSelectedMenu(id);
	};
	return (
		<nav className="nav flex flex-between">
			<Link to="/" onClick={() => handleSelectMenu(1)}>
				Federico Ruttkay
			</Link>
			<ul className="nav__items flex">
				{menuItems.map((item) => (
					<li
						className={
							"nav__item" + (selectedMenu === item.id ? " selected" : "")
						}
						onClick={() => handleSelectMenu(item.id)}
						key={item.id}
					>
						<Link to={item.path}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
