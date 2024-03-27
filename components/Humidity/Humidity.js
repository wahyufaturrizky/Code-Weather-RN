import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { roundRainPercentage } from '../../library/functions/functions';

export default function DayDescription({ weather }) {
	let humidity = weather.current.humidity;
	let probabiliyOfPrecipitation = roundRainPercentage(weather.hourly[0]['pop']);

	return (
		<View style={styles.container}>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>CHANCE OF PRECIPITATION</Text>
				<Text style={styles.bigText}>{`${probabiliyOfPrecipitation}%`}</Text>
			</View>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>HUMIDITY</Text>
				<Text style={styles.bigText}>{`${humidity}%`}</Text>
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
