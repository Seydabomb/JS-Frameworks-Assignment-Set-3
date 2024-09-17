import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	// Will only execute once
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);

			// Finding an error
			try {
				const places = await fetchAvailablePlaces();
				navigator.geolocation.getCurrentPosition((position) => {
					const sortedPlaces = sortPlacesByDistance(
						places,
						position.coords.latitude,
						position.coords.longitude,
					);
					setAvailablePlaces(sortedPlaces);
					setIsFetching(false);
				});
			} catch (error) {
				// Handling the error. Updating the UI & notifying the user
				setError({
					message: error.message || "Could not fetch places, please try again later.",
				});
				setIsFetching(false);
			}
		}

		fetchPlaces();
	}, []);

	if (error) {
		return <ErrorPage title="An error occurred!" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching} // Will be true or false
			loadingText="Fetching place data..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
