import "./Layout.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<nav className="footer__links">
				<a href="#" className="footer__link">
					Find your dream home
				</a>
				<a href="#" className="footer__link">
					Request proposal
				</a>
				<a href="#" className="footer__link">
					Download Home Planner
				</a>
				<a href="#" className="footer__link">
					Contact Us
				</a>
				<a href="#" className="footer__link">
					Submit your property
				</a>
				<a href="#" className="footer__link">
					Come work with us
				</a>
			</nav>
			<p className="footer__copyright">
				© Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes.
				This does NOT apply if you plan to produce your own course or tutorials based on this project.
			</p>
		</footer>
	);
}
