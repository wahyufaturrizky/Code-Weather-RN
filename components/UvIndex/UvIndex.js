import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { uviLegend } from '../../library/legends/legends';

export default function UvIndex({ weather }) {
	const [uviText, setUviText] = useState({});

	let uvi = Math.round(weather.current.uvi);
	let windowWidth = Dimensions.get('window').width;
	let barPadding = 15;
	let barWidth = windowWidth - 2 * barPadding;
	let barHeight = 20;
	let circleDia = 16;
	let circleBorderRadius = circleDia / 2;
	let circlePositionLeft =
		(barWidth / 11 - circleDia) / 2 + (uvi - 1) * (barWidth / 11);

	useEffect(() => {
		function uviTextUpdate(value) {
			if (value !== 0) {
				let text = {
					uviLevel: `${value} - ${uviLegend[uvi - 1].text}`,
					uivDescription: `${uviLegend[uvi - 1].description}`,
				};
				setUviText(text);
			} else {
				let text = {
					uviLevel: `0`,
				};
				setUviText(text);
			}
		}
		uviTextUpdate(uvi);
	}, [uvi]);

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
				UV INDEX
			</Text>
			<Text
				style={{
					fontSize: 25,
					color: 'white',
					fontWeight: '500',
					paddingBottom: 2,
				}}
			>
				{uviText.uviLevel}
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
							backgroundColor: uviLegend[0].color,
							borderTopLeftRadius: barHeight / 2,
							borderBottomLeftRadius: barHeight / 2,
						}}
					/>
					{uviLegend.slice(1, -1).map((el, index) => {
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
							backgroundColor: uviLegend[uviLegend.length - 1].color,
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
							left: uvi === 0 ? 2 : circlePositionLeft,
							bottom: (barHeight - circleBorderRadius / 2) / 2,
						},
					]}
				></View>
			</View>
			{uvi !== 0 && (
				<Text
					style={{
						fontSize: 12,
						top: 5,
						color: 'white',
						paddingBottom: 5,
					}}
				>
					{uviText.uivDescription}
				</Text>
			)}
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
