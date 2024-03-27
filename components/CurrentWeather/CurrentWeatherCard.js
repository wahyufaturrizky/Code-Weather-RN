import React from 'react';
import { isSameDay, format } from 'date-fns';
import { View, Text, StyleSheet } from 'react-native';
import iconsDictionary from '../../library/images/iconsDictionary';

function CurrentWeatherCard({ city, weather }) {
	const locationTimezone = weather.timezone_offset * 1000;

	const todayData = weather.daily.filter((object) => {
		const now = new Date().getTime() + locationTimezone;
		const currentDate = new Date(object.dt * 1000 + locationTimezone);
		return isSameDay(now, currentDate);
	});

	const currentWeather = {
		city: city.name,
		country: city.country,
		description:
			weather.current.weather[0].description.charAt(0).toUpperCase() +
			weather.current.weather[0].description.slice(1),
		icon:
			iconsDictionary[weather.current.weather[0].icon] ||
			iconsDictionary['02d'],
		min: Math.round(todayData[0].temp.min),
		max: Math.round(todayData[0].temp.max),
		temp: Math.round(weather.current.temp),
	};
	return (
		<View style={styles.currentDayContainer}>
			<Text style={styles.city}>
				{city.name}, {city.country}
			</Text>
			<Text style={styles.nowWeatherDescription}>
				{currentWeather.description}
			</Text>
			<Text style={styles.currentTemp}>{currentWeather.temp}°</Text>
			<Text style={styles.nowWeatherDescription}>
				H:{currentWeather.max}° L:{currentWeather.min}°
			</Text>
		</View>
	);
}

export default CurrentWeatherCard;

const styles = StyleSheet.create({
	currentDayContainer: {
		top: 70,
		alignSelf: 'center',
	},
	city: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '300',
		color: 'white',
	},

	nowWeatherDescription: {
		textAlign: 'center',
		fontSize: 18,

		color: 'white',
	},
	currentTemp: {
		textAlign: 'center',
		fontSize: 80,
		fontWeight: '100',
		color: 'white',
	},
});
