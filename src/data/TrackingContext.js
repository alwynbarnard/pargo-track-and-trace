import React, { createContext, useContext, useState } from "react";

const TrackingContext = createContext();

const TrackingProvider = ({ children }) => {
	const [tracking, setTracking] = useState(false);

	const toggleTracking = () => {
		setTracking(!tracking);
	};
	return (
		<TrackingContext.Provider value={{ tracking, toggleTracking }}>
			{children}
		</TrackingContext.Provider>
	);
};

const useTracking = () => {
	return useContext(TrackingContext);
};

export { TrackingProvider, useTracking };
