import React from 'react';
import iconsDictionary from '../../library/images/iconsDictionary';
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import { roundRainPercentage } from '../../library/functions/functions';

export default function NextHoursForecastCard({ weather }) {
	const locationTimezone = weather.timezone_offset * 1000;

	const nextHoursForecast = weather.hourly.map((hour) => {
		const dt = new Date(hour.dt * 1000 + locationTimezone);
		return {
			date: dt,
			hour: dt.getHours(),
			rain:
				roundRainPercentage(hour['pop']) !== 0
					? `${roundRainPercentage(hour['pop'])}%`
					: '',
			icon: iconsDictionary[hour.weather[0].icon] || iconsDictionary['02d'],
			temp: `${Math.round(hour.temp)}°`,
		};
	});

	let nextHoursForecastArr = [
		...nextHoursForecast.slice(0, 1),
		Object.assign({}, nextHoursForecast[0], { hour: 'Now' }),
		...nextHoursForecast.slice(1),
	].slice(0 + 1);

	return (
		<View style={styles.nextHoursForecast}>
			<ScrollView
				style={styles.nextHoursForecast}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{nextHoursForecastArr.slice(0, 25).map((hourly, index) => (
					<View key={index} style={styles.container}>
						<Text style={styles.smallText}>{hourly.hour}</Text>
						<Text style={styles.rainText}>{hourly.rain}</Text>
						<Image style={styles.icon} source={hourly.icon} />
						<Text style={styles.smallText}>{hourly.temp}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		top: 80,
		height: 220,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
		borderTopColor: 'white',
		borderTopWidth: 0.2,
	},

	icon: {
		alignSelf: 'center',
		width: 50,
		height: 50,
	},
	smallText: {
		alignSelf: 'center',
		fontSize: 15,
		color: 'white',
	},
	rainText: {
		top: 4,
		alignSelf: 'center',
		fontSize: 12,
		color: '#42bff5',
	},
});
