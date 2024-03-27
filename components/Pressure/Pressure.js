import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function DayDescription({ weather }) {
	let pressure = weather.current.pressure;
	let visibility = weather.current.visibility / 1000;

	return (
		<View style={styles.container}>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>VISIBILITY</Text>
				<Text style={styles.bigText}>{`${visibility} km`}</Text>
			</View>
			<View style={styles.descriptionBox}>
				<Text style={styles.smallText}>PRESSURE</Text>
				<Text style={styles.bigText}>{`${pressure} hPa`}</Text>
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
