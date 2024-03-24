import './App.css';
import Header from "./components/Header";
import TrackingBanner from "./components/TrackingBanner";
import Map from "./components/Map";

function App() {
  return (
		<div className="App">
			<Header />
			<TrackingBanner />
			<Map />
		</div>
	);
}

export default App;
