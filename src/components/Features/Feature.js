import "./Features.scss";
import icons from "../../img/sprite.svg";

export default function Feature({ icon, title, text }) {
	return (
		<div className="feature">
			<svg className="feature__icon">
				<use xlinkHref={`${icons}#${icon}`} />
			</svg>
			<h4 className="heading-4 heading-4--dark">{title}</h4>
			<p className="feature__text">{text}</p>
		</div>
	);
}
