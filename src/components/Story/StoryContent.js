import "./Story.scss";

export default function StoryContent() {
	return (
		<section className="story-content">
			<h3 className="heading-3 story__main">Happy Customers</h3>
			<h2 className="heading-2 heading-2--dark story__sub">
				&ldquo; The best decision of our lives &rdquo;
			</h2>
			<p className="story__text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
				pariatur voluptatibus. Quidem consequatur harum volupta!
			</p>

			<button className="btn story__btn">Find your own home</button>
		</section>
	);
}
