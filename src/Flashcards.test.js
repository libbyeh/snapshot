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

const exitToMainMock = jest.fn();
const nextQuestionMock = jest.fn();
// const chosenFlashcardSetMock = jest.fn();


describe ('Flashcards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
    <Flashcards  
      nextQuestion={nextQuestionMock} 
       />
    )
  })

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

  it('should invoke exitToMain when clicked', () => {
    wrapper.find('.reset').simulate('click', { preventDefault: () => {} })
    expect(exitToMainMock.toBeCalled())
  });

  it('should change to the next question when clicked', () => {
    wrapper.find('.next-button').simulate('click', { preventDefault: () => {} })
    expect(setLimitMock.toBeCalled());
  })

})