import { useState } from "react";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		console.log(menuOpen);
		setMenuOpen((prevMode) => !prevMode);
	};
	return (
		<nav className="navbar">
			<div className="nav-header">
				<div>Logo</div>
				<div className="menu-container">
					<button onClick={toggleMenu}>
						<Menu sx={{ color: "#fff" }} />
					</button>
				</div>
			</div>
			<div className={menuOpen ? "links-container active" : "links-container"}>
				<ul className="links">
					<li>
						<a href="#">Link One</a>
					</li>
					<li>
						<a href="#">Link Two</a>
					</li>
					<li>
						<a href="#">Link Tre</a>
					</li>
					<li>
						<a href="#">Link For</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
