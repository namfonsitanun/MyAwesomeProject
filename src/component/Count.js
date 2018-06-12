import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Count = props => (
  <View>
    <Text style={styles.title}>{props.count}</Text>
  </View>
)


Count.defaultProps = {
  count: 0,
}

Count.propTypes = {
  count: PropTypes.number,
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
})

export default Count
