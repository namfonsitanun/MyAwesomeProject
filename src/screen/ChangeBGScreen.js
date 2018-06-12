import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || '#FFFFFF'};
`

export default class ChangeBGScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      bgcolor: '#FFFFFF',
    }
  }

  render() {
    return (
      <Box id="box" color={this.state.bgcolor}>
        <TextInput
          id="text"
          style={styles.input}
          placeholder="Input color"
          onChangeText={bgcolor => this.setState({ bgcolor })}
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
    textAlign: 'center',
  },
})
