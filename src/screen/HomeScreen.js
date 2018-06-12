import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Count } from '../component/Count.js'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  // componentWillReceiveProps() {
  // }

  handleIncrease = () => {
	  console.log('handleIncrease')
	  this.setState({ count: this.state.count + 1 })
  };

	handleDecrease = () => {
	  console.log('handleIncrease')
	  this.setState({ count: this.state.count - 1 })
	};

	render() {
	  return (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Detail"
      onPress={() =>
						this.props.navigation.navigate('Details', {
							count: this.state.count,
						})
					}
    />
    <Count count={this.state.count} />
    <View style={styles.list}>
      <TouchableOpacity id="increase" onPress={this.handleIncrease}>
        <View style={styles.item}>
          <Text>Increase</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity id="decrease" onPress={this.handleDecrease}>
        <View style={styles.item}>
          <Text>Decrease</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
	  )
	}
}
const styles = StyleSheet.create({
  container: {
    // color: "black",
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
  },
  list: {
    marginTop: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
})
