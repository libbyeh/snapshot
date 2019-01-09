import React from 'react'
import Answer from './Answer'
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

describe ('Answer', () => {
  let wrapper = shallow(
    <Answer  />
    )

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update local storage', () => {
    let wrapper = shallow(
      <Answer renderSavedFlashcards={jest.fn()}/>
      )
    const savedCard = [
      {
      'id': 1,
      'answer': "Array.length",
      'definition': "Sets or returns the number of elements in that array.",
      'answerCorrect': "false",
      'link': "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length",
      }
    ]
    wrapper.setState({ savedCard })
    wrapper.instance().saveFlashcard()
    const itemsInStorage = JSON.parse(localStorage.getItem('savedCard')).length
    expect(itemsInStorage).toEqual(1)
  })

})