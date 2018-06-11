import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default class ChangeBGScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			bgcolor: '#FFFFFF',
		}
	}

	render() {
		return (
			<View style={styles(this.state.bgcolor).container}>
				<TextInput
					style={styles.input}
					placeholder="color hex code"
					onChangeText={bgcolor => this.setState({ bgcolor })}
				/>
			</View>
		)
	}
}

const styles = color =>
	StyleSheet.create({
		container: {
			// color: "black",
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: color,
		},
		input: {
			textAlign: 'center',
		},
	})
