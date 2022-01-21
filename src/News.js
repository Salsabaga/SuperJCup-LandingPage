const News = () => {
	return (
		<section className="news-section">
			<div className="news-title">
				<h2>{"Latest News".toUpperCase()}</h2>
			</div>
			<div className="news-container">
				<div className="card" id="main">
					<div className="img-container">
						<img
							src={require("./images/news/pexels-mike-gonzález-2167890.jpg")}
							alt="Masked wrestler clashes"
						/>
					</div>
					<div className="card-details">
						<h2>Main News Title</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							laoreet ante vel magna faucibus lacinia. Nulla fringilla ipsum ut
							ipsum rutrum, id molestie justo finibus. Sed ac velit ut velit
							iaculis pharetra tincidunt et mauris.
						</p>
					</div>
				</div>
				<div className="card sub-card">
					<div className="sub-container">
						<div className="overlay"></div>
						<img
							src={require("./images/news/placeholder-img-osaka.jpg")}
							alt="Masked wrestler clashes"
						/>
					</div>
					<div className="card-details">
						<h2>Main News Title</h2>
					</div>
				</div>
				<div className="card sub-card">
					<div className="sub-container">
						<div className="overlay"></div>
						<img
							src={require("./images/news/placeholder-img-mask.jpg")}
							alt="Masked wrestler clashes"
						/>
					</div>
					<div className="card-details">
						<h2>Main News Title</h2>
					</div>
				</div>
				<div className="card sub-card">
					<div className="sub-container">
						<div className="overlay"></div>
						<img
							src={require("./images/news/placeholder-img-sanfrancisco.jpg")}
							alt="Masked wrestler clashes"
						/>
					</div>
					<div className="card-details">
						<h2>Main News Title</h2>
					</div>
				</div>
			</div>
			<div className="more-container">
				<h4>
					<a href="#">READ MORE</a>
				</h4>
			</div>
		</section>
	);
};

export default News;
