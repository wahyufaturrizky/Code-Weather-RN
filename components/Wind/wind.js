import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { degToCard } from '../../library/functions/functions';

export default function DayDescription({ weather }) {
	let windSpeedMph = Math.round(weather.current.wind_speed * 2.23694 * 10) / 10;
	let windDirection = degToCard(weather.current.wind_deg);
	let feelsLike = Math.round(weather.current.feels_like);

	return (
		<View style={styles.container}>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>WIND</Text>
				<Text
					style={styles.bigText}
				>{`${windDirection} ${windSpeedMph} mph`}</Text>
			</View>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>FEELS LIKE</Text>
				<Text style={styles.bigText}>{` ${feelsLike}°`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		padding: 15,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
	},

	smallText: {
		fontSize: 10,
		color: 'white',
		paddingBottom: 5,
	},

	bigText: {
		fontSize: 25,
		color: 'white',
		paddingBottom: 5,
	},

	descriptionBox: {
		flex: 1,
		justifyContent: 'flex-start',
	},
});
