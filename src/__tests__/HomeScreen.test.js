import React from 'react'
import 'react-native'
import HomeScreen from '../screen/HomeScreen.js'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('<HomeScreen>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should have 2 TouchableOpacities', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2)
  })

  it('Should have 1 Button', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper.find('Button')).toHaveLength(1)
  })

  it('Should have 3 Texts', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('Increase should clicked 1 time', () => {
    const wrapper = shallow(<HomeScreen />)
    const Increase = jest.spyOn(wrapper.instance(), 'handleIncrease')
    expect(Increase).toHaveBeenCalledTimes(0)
    wrapper.find('#increase').simulate('press')
    expect(Increase).toHaveBeenCalledTimes(1)
  })

  it('Decrease should clicked 1 time', () => {
    const wrapper = shallow(<HomeScreen />)
    const Increase = jest.spyOn(wrapper.instance(), 'handleDecrease')
    expect(Increase).toHaveBeenCalledTimes(0)
    wrapper.find('#decrease').simulate('press')
    expect(Increase).toHaveBeenCalledTimes(1)
  })
})
