import "./Story.scss";

import img1 from "../../img/story-1.jpeg";
import img2 from "../../img/story-2.jpeg";

export default function StoryPictures() {
	return (
		<section className="story-pictures">
			<img src={img1} alt="" className="story__img--1" />
			<img src={img2} alt="" className="story__img--2" />
		</section>
	);
}
