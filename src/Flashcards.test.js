import React from 'react'
import Flashcards from './Flashcards'
import { shallow } from 'enzyme'


describe ('Flashcards', () => {
  let wrapper = shallow(
    <Flashcards  />
    )

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})