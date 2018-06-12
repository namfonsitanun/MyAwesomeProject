import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerRight: <Button onPress={() => alert('This is a button!')} title="Click" />,
  }

  render() {
    const { navigation } = this.props
    // console.log(navigation)
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
