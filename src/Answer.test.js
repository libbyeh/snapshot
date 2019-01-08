import React from 'react'
import Answer from './Answer'
import { shallow } from 'enzyme'


describe ('Answer', () => {
  let wrapper = shallow(
    <Answer  />
    )

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})