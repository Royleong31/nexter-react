import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Realtors from "./components/Realtors/Realtors";
import Features from "./components/Features/Features";
import StoryPictures from "./components/Story/StoryPictures";
import StoryContent from "./components/Story/StoryContent";
import Homes from "./components/Homes/Homes";
import Gallery from "./components/Gallery/Gallery";

function App() {
	return (
		<Layout>
			<Header />
			<Realtors />
			<Features />
			<StoryPictures />
			<StoryContent />
			<Homes />
			<Gallery />
		</Layout>
	);
}

export default App;
