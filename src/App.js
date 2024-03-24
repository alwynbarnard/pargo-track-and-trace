import "./App.css";
import Header from "./components/Header";
import TrackingBanner from "./components/TrackingBanner";
import TraceBanner from "./components/TraceBanner";
import Footer from "./components/Footer";
import { TrackingProvider } from "./data/TrackingContext";

function App() {
	return (
		<TrackingProvider>
			<div className="App">
				<Header />
				<TrackingBanner />
				<TraceBanner />
				<Footer />
			</div>
		</TrackingProvider>
	);
}

export default App;
