import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { convertTime } from '../../library/functions/functions';

export default function DayDescription({ weather }) {
	const locationTimezone = weather.timezone_offset * 1000;
	const sunDetails = {
		sunrise: convertTime(
			new Date(weather.daily[0].sunrise * 1000 + locationTimezone)
		),
		sunset: convertTime(
			new Date(weather.daily[0].sunset * 1000 + locationTimezone)
		),
	};

	return (
		<View style={styles.container}>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>SUNRISE</Text>
				<Text style={styles.bigText}>{sunDetails.sunrise}</Text>
			</View>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>SUNSET</Text>
				<Text style={styles.bigText}>{sunDetails.sunset}</Text>
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
