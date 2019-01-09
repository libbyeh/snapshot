import React from 'react'
import Flashcards from './Flashcards'
import { mount, shallow } from 'enzyme'

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

describe ('Flashcards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
    <Flashcards  
      nextQuestion={nextQuestionMock} />
    )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of answerCorrect set to null, submitAnswer set to false and flashcardIndex set to 0', () => {
    expect(wrapper.state()).toEqual({ ...wrapper.state(), answerCorrect: null })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), submitAnswer: false })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), flashcardIndex: 0 })
  });

  it('should check to see if answer is correct', () => {
    let wrapper = shallow(
      <Flashcards chosenFlashcardSet={ snapshot }/>
    )
    wrapper.instance().checkAnswer();
    expect(wrapper.state()).toEqual({ ...wrapper.state(), submitAnswer: true })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), answerCorrect: 'Correct!' })
  });

  it('should update the state when clearSavedConcepts is called', () => {
      wrapper.setState({
        flashcard: ''
      })
    wrapper.instance().clearSavedConcepts();
    expect(wrapper.instance().state.flashCards).toEqual('');
  });

  it('should update the flashcardIndex state when exitToMain is called', () => {
    let wrapper = shallow(
      <Flashcards renderSavedFlashcards={jest.fn()}/>
      )
      wrapper.setState({
        flashcardIndex: 0 
      })
    wrapper.instance().exitToMain();
    expect(wrapper.instance().state.flashcardIndex).toEqual(0);
  });

  it.skip('should change to the next question when clicked', () => {
    wrapper.find('.next-button').simulate('click', { preventDefault: () => {} })
    expect(setLimitMock.toBeCalled());
  })

})