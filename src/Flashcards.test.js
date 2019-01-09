import React from 'react'
import Flashcards from './Flashcards'
import { shallow } from 'enzyme'

const snapshot = [
  {
    'id': 1,
    'answer': "Array.length",
    'definition': "Sets or returns the number of elements in that array.",
    'answerCorrect': "false",
    'link': "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length",
  }
]

describe ('Flashcards', () => {
  let wrapper = shallow(
    <Flashcards  />
    )

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check to see if answer is correct', () => {
    let wrapper = shallow(
      <Flashcards chosenFlashcardSet={ snapshot }/>
    )
    wrapper.instance().checkAnswer();
    expect(wrapper.state()).toEqual({ ...wrapper.state(), submitAnswer: true })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), answerCorrect: 'Correct!' })
  });


})