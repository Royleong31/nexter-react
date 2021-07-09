import "./Realtors.scss";
import img1 from "../../img/realtor-1.jpeg";
import img2 from "../../img/realtor-2.jpeg";
import img3 from "../../img/realtor-3.jpeg";

export default function Realtors() {
	return (
		<section className="realtors">
			<h3 className="heading-3 realtors__heading">Top 3 Realtors</h3>
      
			<div className="realtors__info">
				<img src={img1} alt="" className="realtors__img" />
				<h4 className="heading-4 heading-4 light">Erik Feinman</h4>
				<p className="realtors__sold">245 houses sold</p>
			</div>

			<div className="realtors__info">
				<img src={img2} alt="" className="realtors__img" />
				<h4 className="heading-4 heading-4 light">Kim Brown</h4>
				<p className="realtors__sold">212 houses sold</p>
			</div>

			<div className="realtors__info">
				<img src={img3} alt="" className="realtors__img" />
				<h4 className="heading-4 heading-4 light">Toby Ramsey</h4>
				<p className="realtors__sold">198 houses sold</p>
			</div>
		</section>
	);
}
