import { useState, useEffect } from 'react';

export default function useGeolocation(lat, lon) {
	const [coordinates, setCoordinates] = useState(null);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCoordinates([position.coords.latitude, position.coords.longitude]);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);

	return coordinates;
}
