import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import iconMenuOpen from "../../assets/images/icon-menu.svg";
import iconMenuClose from "../../assets/images/icon-close-menu.svg";

const NavBar = () => {
	const [selectedMenu, setSelectedMenu] = useState(1);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: 1, label: "Principal", path: "/" },
		{ id: 2, label: "CV", path: "/cv" },
		{ id: 3, label: "Portfolio", path: "/portfolio" },
		{ id: 4, label: "GitHub", path: "/github" },
		{ id: 5, label: "Contacto", path: "/contacto" },
	];

	const handleSelectMenu = (id: number) => {
		setSelectedMenu(id);
	};

	return (
		<nav className="nav flex flex-between">
			<Link className="title-logo" to="/" onClick={() => handleSelectMenu(1)}>
				Federico Ruttkay
			</Link>
			<ul className={"nav__items" + (isMenuOpen ? " menu-open" : "")}>
				{menuItems.map((item) => (
					<li
						className={
							"nav__item" + (selectedMenu === item.id ? " selected" : "")
						}
						key={item.id}
					>
						<Link to={item.path} onClick={() => handleSelectMenu(item.id)}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			<div
				className="open-close-btn"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? <img src={iconMenuClose} /> : <img src={iconMenuOpen} />}
			</div>
		</nav>
	);
};

export default NavBar;
