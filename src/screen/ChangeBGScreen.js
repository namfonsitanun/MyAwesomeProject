import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components'

const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || '#FFFFFF'};
`

export default class ChangeBGScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      bgcolor: '#FFFFFF'
    }
  }

  render() {
    const { bgcolor } = this.props
    const bgChange = bgcolor

    return (
      <Box color={this.state.bgcolor}>
        <TextInput
          style={styles.input}
          onChangeText={bgcolor => this.setState({ bgcolor: bgChange })}
        />
      </Box>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // color: "black",
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: color
  // },
  input: {
    textAlign: 'center'
  }
})
