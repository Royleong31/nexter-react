import "./Header.scss";
import logo from "../../img/logo.png";
import bbcLogo from "../../img/logo-bbc.png";
import forbesLogo from "../../img/logo-forbes.png";
import techCrunchLogo from "../../img/logo-techcrunch.png";
import biLogo from "../../img/logo-bi.png";

export default function Header() {
	return (
		<header className="header">
			<img src={logo} alt="" className="header__logo" />
			<h3 className="heading-3">Your own home</h3>
			<h1 className="heading-1">The ultimate personal freedom</h1>
			<button className="btn header__btn">View our properties</button>
			<div className="header__seenon-text">Seen on</div>
			<div className="header__seenon-logos">
				<img src={bbcLogo} alt="" />
				<img src={forbesLogo} alt="" />
				<img src={techCrunchLogo} alt="" />
				<img src={biLogo} alt="" />
			</div>
		</header>
	);
}
