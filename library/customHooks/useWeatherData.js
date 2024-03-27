import { useState, useEffect } from 'react';
//import { API_KEY } from 'react-native-dotenv';
import useGeoLocation from './useGeolocation';

function useWeatherData(lat, long) {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState(null);
	const coordinates = useGeoLocation();
	const [airPollution, setAirPollution] = useState(null);

	useEffect(() => {
		if (coordinates) {
			fetchWeatherData(...coordinates);
			fetchCityData(...coordinates);
			fetchAirPollutionData(...coordinates);
		}
	}, [coordinates]);

	async function fetchWeatherData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;
			const response = await fetch(url);
			const data = await response.json();
			setWeather(data);
		} catch (err) {
			console.log('Unable to fetch weahter');
		}
	}

	async function fetchCityData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&units=metric&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;
			const response = await fetch(url);
			const data = await response.json();
			setCity({
				name: data.name,
				country: data.sys.country,
			});
		} catch (err) {
			console.log('Unable to fetch city');
		}
	}

	async function fetchAirPollutionData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;
			const response = await fetch(url);
			const airData = await response.json();
			setAirPollution(airData.list[0]);
		} catch (err) {
			console.log('Unable to fetch air pollution');
		}
	}

	return { weather, city, airPollution };
}

export default useWeatherData;
