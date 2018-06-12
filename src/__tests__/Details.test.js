import React from 'react'
import 'react-native'
import DetailsScreen from '../screen/DetailsScreen.js'
import { shallow } from 'enzyme'

describe('<DetailsScreen>', () => {
  const navigation = {
    state: {
      parums: {
        count: 3,
      },
    },
    getParam: () => 3,
  }

  it('Should have count equal 3', () => {
    const wrapper = shallow(<DetailsScreen navigation={navigation} />)
    console.log(JSON.stringify(wrapper.find('#count').children(), null, 4))
    expect(wrapper
      .find('#count')
      .children()
      .text()).toEqual('3')
  })
})
