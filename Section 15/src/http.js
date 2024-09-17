export async function fetchAvailablePlaces() {
	const response = await fetch("http://localhost:3000/places");
	const resData = await response.json();

	if (!response.ok) {
		throw new Error("Failed to fetch places");
	}

	return resData.places;
}

export async function fetchUserPlaces() {
	const response = await fetch("http://localhost:3000/user-places");
	const resData = await response.json();

	if (!response.ok) {
		throw new Error("Failed to fetch user places");
	}

	return resData.places;
}

export async function updateUserPlaces(places) {
	const response = await fetch("http://localhost:3000/user-places", {
		method: "PUT",
		// Converts to JSON format so the backend can read it (otherwise it would just be js code)
		body: JSON.stringify({ places }),
		headers: {
			// Tells the backend that we are sending in json data
			"Content-Type": "application/json",
		},
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error("Failed to update user data.");
	}

	return resData.message;
}
