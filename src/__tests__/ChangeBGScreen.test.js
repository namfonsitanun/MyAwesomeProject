import React from 'react'
import 'react-native'
import ChangeBGScreen, { Box } from '../screen/ChangeBGScreen.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'styled-components-test-utils/lib/jest'
import 'jest-styled-components/native'
import toJSON from 'enzyme-to-json'

describe('<ChangeBGScreen>', () => {
  it('Test onChangeText', () => {
    const bg = shallow(<ChangeBGScreen />)
    bg.find('#text').simulate('changeText', '#000')
    expect(bg.state().bgcolor).toEqual('#000')
  })
})

describe('Test Box', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Test background color', () => {
    const wrapper = shallow(<Box color="#000" />)
    expect(toJSON(wrapper)).toHaveStyleRule('background-color', '#000')
  })
})
