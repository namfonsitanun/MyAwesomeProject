import React from 'react'
import 'react-native'
import SelectSpaceScreen from '../screen/SelectSpaceScreen.js'
import renderer from 'react-test-renderer'
import 'styled-components-test-utils/lib/jest'

describe('<SelectSpaceScreen>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectSpaceScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
