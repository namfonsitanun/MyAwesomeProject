import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Count extends Component {
	// componentWillReceiveProps(nextPorps) {
	// 	console.log('naxtPorps', nextPorps.count);
	// 	console.log('this props', this.props.count);
	// }

	render() {
		return (
			<View>
				<Text style={styles.title}>{this.props.count}</Text>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 18,
		textAlign: 'center',
	},
});
