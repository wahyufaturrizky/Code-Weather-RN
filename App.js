import React from 'react';
import useWeather from './library/customHooks/useWeatherData';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';

import { View, StyleSheet } from 'react-native';

export default function App() {
	const { weather, city, airPollution } = useWeather();
	//	console.log(city);
	return (
		<View style={styles.container}>
			{!weather || !city || !airPollution ? (
				<Loading />
			) : (
				<Weather weather={weather} city={city} airPollution={airPollution} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
});
