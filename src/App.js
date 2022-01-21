import Carousel from "./Carousel";
import Navbar from "./Navbar";
import News from "./News";
import { Facebook, Public, Twitter } from "@mui/icons-material";

function App() {
	return (
		<main>
			<Navbar />
			<Carousel />
			<News />
			<footer>
				<div className="footer-info">
					<p>Made with React by Danny Baldeon Abril</p>
					<div className="footer-icons">
						<a href="#">
							<Facebook sx={{ color: "#fff" }} />
						</a>
						<a href="#">
							<Twitter sx={{ color: "#fff" }} />
						</a>
						<a href="#">
							<Public sx={{ color: "#fff" }} />
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}

export default App;
