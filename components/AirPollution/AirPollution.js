import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { aqiLegend } from '../../library/legends/legends';

export default function AirPollution({ airPollution }) {
	const [aqiText, setAquiText] = useState('text');

	let aqi = airPollution.main.aqi;
	let windowWidth = Dimensions.get('window').width;
	let barPadding = 15;
	let barWidth = windowWidth - 2 * barPadding;
	let barHeight = 20;
	let circleDia = 16;
	let circleBorderRadius = circleDia / 2;

	let circlePositionLeft =
		(barWidth / 10 - circleDia) / 2 + (aqi - 1) * (barWidth / 10);

	useEffect(() => {
		function aquiTextUpdate(value) {
			let text = `${value} - ${aqiLegend[value - 1].text}`;
			setAquiText(text);
		}
		aquiTextUpdate(aqi);
	}, [aqi]);

	return (
		<View
			style={[styles.container, { width: windowWidth, padding: barPadding }]}
		>
			<Text
				style={{
					fontSize: 10,
					color: 'white',
					paddingBottom: 5,
				}}
			>
				AIR POLLUTION
			</Text>
			<Text
				style={{
					fontSize: 25,
					color: 'white',
					fontWeight: '500',
					paddingBottom: 2,
				}}
			>
				{aqiText}
			</Text>
			<View>
				<View
					style={[
						styles.bar,
						{ height: barHeight, borderRadius: barHeight / 2 },
					]}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: aqiLegend[0].color,
							borderTopLeftRadius: barHeight / 2,
							borderBottomLeftRadius: barHeight / 2,
						}}
					/>
					{aqiLegend.slice(1, -1).map((el, index) => {
						return (
							<View
								key={index}
								style={{
									flex: 1,
									backgroundColor: el.color,
								}}
							></View>
						);
					})}
					<View
						style={{
							flex: 1,
							backgroundColor: aqiLegend[aqiLegend.length - 1].color,
							borderTopRightRadius: barHeight / 2,
							borderBottomRightRadius: barHeight / 2,
						}}
					/>
				</View>
				<View
					style={[
						styles.circle,
						{
							width: circleDia,
							height: circleDia,
							borderRadius: circleBorderRadius,
							left: circlePositionLeft,
							bottom: (barHeight - circleBorderRadius / 2) / 2,
						},
					]}
				></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
	},

	bar: {
		flexDirection: 'row',
		top: 10,

		borderColor: 'white',
		borderWidth: 1,
	},
	circle: {
		backgroundColor: 'black',
		borderColor: 'white',
		borderWidth: 2,
	},
});
