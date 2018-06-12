import React from 'react'
import 'react-native'
import ItemScreen from '../screen/ItemScreen.js'
import { shallow } from 'enzyme'

describe('<ItemScreen>', () => {
  it('Addjob should clicked 1 time', () => {
    const wrapper = shallow(<ItemScreen />)
    const Addjob = jest.spyOn(wrapper.instance(), 'Addjob')
    expect(Addjob).toHaveBeenCalledTimes(0)
    wrapper.find('#addjob').simulate('press')
    expect(Addjob).toHaveBeenCalledTimes(1)
  })
})
