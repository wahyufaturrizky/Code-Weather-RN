import React from 'react';
import {
	getWeekDay,
	roundRainPercentage,
} from '../../library/functions/functions';
import iconsDictionary from '../../library/images/iconsDictionary';
import { StyleSheet } from 'react-native';
import { Image, View, Text } from 'react-native';

export default function NextDaysForecastCard({ weather }) {
	const nextDaysForecast = weather.daily.map((day) => {
		return {
			name: getWeekDay(day.dt),
			icon: iconsDictionary[day.weather[0].icon] || iconsDictionary['02d'],
			precipitation:
				roundRainPercentage(day['pop']) !== 0
					? `${roundRainPercentage(day['pop'])}%`
					: '',
			maxTemp: `${Math.round(day.temp.max)}°`,
			minTemp: `${Math.round(day.temp.min)}°`,
		};
	});

	const nextDaysForecastArr = nextDaysForecast.slice(1);

	return (
		<View style={styles.container}>
			{nextDaysForecastArr.map((day, index) => (
				<View style={styles.card} key={index}>
					<Text style={styles.dayName}>{day.name}</Text>
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<Image style={styles.icon} source={day.icon} />
					</View>
					<Text style={styles.precipitation}>{day.precipitation}</Text>
					<Text style={styles.maxTemp}>{day.maxTemp}</Text>
					<Text style={styles.minTemp}>{day.minTemp}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 300,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
		borderTopColor: 'white',
		borderTopWidth: 0.2,
		justifyContent: 'center',
		padding: 10,
	},

	icon: {
		alignSelf: 'center',
		width: 40,
		height: 40,
		left: 40,
	},
	card: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	dayName: {
		flex: 1.3,
		alignSelf: 'center',
		fontSize: 15,
		color: 'white',
		left: 12,
	},
	precipitation: {
		flex: 1,
		left: 12,
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: 15,
		color: '#42bff5',
	},
	maxTemp: {
		flex: 1,
		textAlign: 'right',
		alignSelf: 'center',
		fontSize: 15,
		color: 'white',
	},
	minTemp: {
		textAlign: 'center',
		flex: 1,
		alignSelf: 'center',
		fontSize: 15,
		color: 'white',
	},
});
