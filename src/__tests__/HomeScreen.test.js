import React from 'react'
import 'react-native'
import HomeScreen from '../screen/HomeScreen.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})
