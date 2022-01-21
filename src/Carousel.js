import { useState, useEffect } from "react";
import { carouselCards } from "./data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Carousel = () => {
	const [cardIndex, setCardIndex] = useState(0);
	const nextSlide = () => {
		console.log(cardIndex);
		setCardIndex((oldIndex) => {
			let index = oldIndex + 1;
			if (index > carouselCards.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		console.log(cardIndex);
		setCardIndex((oldIndex) => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = carouselCards.length - 1;
			}
			return index;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setCardIndex((oldIndex) => {
				let index = oldIndex + 1;
				if (index > carouselCards.length - 1) {
					index = 0;
				}
				return index;
			});
		}, 5000);

		return () => {
			clearInterval(slider);
		};
	}, [cardIndex]);

	return (
		<section className="carousel-container">
			<div className="carousel-center">
				{carouselCards.map((card, cardIdx) => {
					const { id, name, alt, link } = card;
					let position = "nextSlide";
					if (cardIdx === cardIndex) {
						position = "activeSlide";
					}
					return (
						<article className={position} key={id}>
							<a href={link}>
								<img
									src={require(`./images/SuperJCup-${name}.png`)}
									alt={alt}
								/>
							</a>
						</article>
					);
				})}
				<button onClick={prevSlide} className="prev">
					<ArrowBackIosNewIcon sx={{ fontSize: 50, color: "white" }} />
				</button>
				<button onClick={nextSlide} className="next">
					<ArrowForwardIosIcon sx={{ fontSize: 50, color: "white" }} />
				</button>
			</div>
		</section>
	);
};

export default Carousel;
