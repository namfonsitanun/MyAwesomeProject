import React from 'react'
import 'react-native'
import DetailsScreen from '../screen/DetailsScreen.js'
import { shallow } from 'enzyme'

describe('<DetailsScreen>', () => {
	const navigation = { parum: 3 }

	it('Should have count equal 3', () => {
		const wrapper = shallow(<DetailsScreen {...navigation} />)
		expect(wrapper.find('#count')).toEqual(3)
	})
})
