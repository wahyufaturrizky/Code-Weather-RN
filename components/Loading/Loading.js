import React from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	StatusBar,
	StyleSheet,
} from 'react-native';

export default function Loading() {
	return (
		<View style={{ flex: 1, backgroundColor: '#52bffa' }}>
			<StatusBar barStyle='light-content' />
			<View style={styles.container}>
				<Text style={styles.header}>Hello</Text>
				<ActivityIndicator
					style={styles.loadingImg}
					size='large'
					color='white'
				/>
				<Text style={styles.description}>Loading...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingImg: {
		top: 250,
		marginBottom: 20,
	},
	header: {
		bottom: 50,
		fontSize: 35,
		fontWeight: '300',
		color: 'white',
	},
	description: {
		top: 250,
		fontSize: 18,
		fontWeight: '200',
		color: 'white',
	},
});
