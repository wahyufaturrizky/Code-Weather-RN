import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function DayDescription({ weather }) {
	const todayWeatherDescription = {
		description: weather.daily[0].weather[0].description,
		max: Math.round(weather.daily[0].temp.max),
		min: Math.round(weather.daily[0].temp.min),
	};

	return (
		<View style={styles.container}>
			<Text
				style={styles.description}
			>{`Today: ${todayWeatherDescription.description} currently. The high will be ${todayWeatherDescription.max}°. The low will be ${todayWeatherDescription.min}°.`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		padding: 15,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
	},

	description: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 15,
		color: 'white',
	},
});
