import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.scss";

export default function Layout({ children }) {
	return (
		<main className="container">
			<Sidebar />
			{children}
			<Footer />
		</main>
	);
}
