import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export class DetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details',
		headerRight: <Button onPress={() => alert('This is a button!')} title="Click" />,
	}

	render() {
		const { navigation } = this.props
		const count = navigation.getParam('count')
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text id="count" style={styles.title}>
					{count}
				</Text>
				<Text>Details Screen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
	},
})
