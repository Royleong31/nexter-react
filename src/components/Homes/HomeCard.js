import icons from "../../img/sprite.svg";

export default function HomeCard({ img, title, country, rooms, area, price }) {
	return (
		<div className="home">
			<img src={img} alt="" className="home__img" />
			<svg className="home__like">
				<use xlinkHref={`${icons}#icon-heart-full`} />
			</svg>
			<h5 className="home__title">{title}</h5>
			<div className="home__location">
				<svg className="home__like">
					<use xlinkHref={`${icons}#icon-map-pin`} />
				</svg>
				{country}
			</div>
			<div className="home__rooms">
				<svg className="home__like">
					<use xlinkHref={`${icons}#icon-profile-male`} />
				</svg>
				{rooms}
			</div>
			<div className="home__area">
				<svg className="home__like">
					<use xlinkHref={`${icons}#icon-expand`} />
				</svg>
				{area}m<sup>2</sup>
			</div>
			<div className="home__price">
				<svg className="home__like">
					<use xlinkHref={`${icons}#icon-key`} />
				</svg>
				{price}
			</div>
			<button className="btn home__btn">Contact Realtor</button>
		</div>
	);
}
