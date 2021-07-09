import "./Gallery.scss";

import img1 from "../../img/gal-1.jpeg";
import img2 from "../../img/gal-2.jpeg";
import img3 from "../../img/gal-3.jpeg";
import img4 from "../../img/gal-4.jpeg";
import img5 from "../../img/gal-5.jpeg";
import img6 from "../../img/gal-6.jpeg";
import img7 from "../../img/gal-7.jpeg";
import img8 from "../../img/gal-8.jpeg";
import img9 from "../../img/gal-9.jpeg";
import img10 from "../../img/gal-10.jpeg";
import img11 from "../../img/gal-11.jpeg";
import img12 from "../../img/gal-12.jpeg";
import img13 from "../../img/gal-13.jpeg";
import img14 from "../../img/gal-14.jpeg";

export default function Gallery() {
	return (
		<section className="gallery">
			<img src={img1} className="gallery__img--1"></img>
			<img src={img2} className="gallery__img--2"></img>
			<img src={img3} className="gallery__img--3"></img>
			<img src={img4} className="gallery__img--4"></img>
			<img src={img5} className="gallery__img--5"></img>
			<img src={img6} className="gallery__img--6"></img>
			<img src={img7} className="gallery__img--7"></img>
			<img src={img8} className="gallery__img--8"></img>
			<img src={img9} className="gallery__img--9"></img>
			<img src={img10} className="gallery__img--10"></img>
			<img src={img11} className="gallery__img--11"></img>
			<img src={img12} className="gallery__img--12"></img>
			<img src={img13} className="gallery__img--13"></img>
			<img src={img14} className="gallery__img--14"></img>
		</section>
	);
}
