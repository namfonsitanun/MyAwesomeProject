import React from 'react'
import 'react-native'
import ChangeBGScreen from '../screen/ChangeBGScreen.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'styled-components-test-utils/lib/jest'

describe('<ChangeBGScreen>', () => {
  it('Should have black BG', () => {
    const props = {
      bgcolor: 'black'
    }
    const bg = renderer.create(<ChangeBGScreen {...props} />).toJSON()
    // expect(bg).toMatchSnapshot()
    expect(bg).toHaveStyleRule('backgroundColor', 'black')
  })
})
