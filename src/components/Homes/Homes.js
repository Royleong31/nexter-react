import "./Homes.scss";
import HomeCard from "./HomeCard";

import img1 from "../../img/house-1.jpeg";
import img2 from "../../img/house-2.jpeg";
import img3 from "../../img/house-3.jpeg";
import img4 from "../../img/house-4.jpeg";
import img5 from "../../img/house-5.jpeg";
import img6 from "../../img/house-6.jpeg";

const homesArr = [
	{
		title: "Beautiful Familiy House",
		country: "USA",
		rooms: "5 rooms",
		area: "325",
		price: "$1,200,000",
		img: img1,
	},
	{
		title: "Modern Glass Villa",
		country: "Canada",
		rooms: "6 rooms",
		area: "450",
		price: "$2,750,000",
		img: img2,
	},
	{
		title: "Cozy Country House",
		country: "UK",
		rooms: "4 rooms",
		area: "250",
		price: "$850,000",
		img: img3,
	},
	{
		title: "Large Rustic Villa",
		country: "Portugal",
		rooms: "6 rooms",
		area: "480",
		price: "$1,950,000",
		img: img4,
	},
	{
		title: "Majestic Palace House",
		country: "Germany",
		rooms: "18 rooms",
		area: "4230",
		price: "$9,500,000",
		img: img5,
	},
	{
		title: "Modern Family Apartment",
		country: "Italy",
		rooms: "3 rooms",
		area: "280",
		price: "$600,000",
		img: img6,
	},
];

export default function Homes() {
	return (
		<section className="homes">
			{homesArr.map((home, i) => (
				<HomeCard key={i} {...home} />
			))}
		</section>
	);
}
