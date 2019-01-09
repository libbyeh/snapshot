import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const snapshot = [
  {
    'id': 1,
    'answer': "Array.length",
    'definition': "Sets or returns the number of elements in that array.",
    'answerCorrect': "false",
    'link': "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length",
  }
]

const renderFlashcardsMock = jest.fn();

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App key= 'App'/>
      )
  })
  

  it('should match the snapshot with all data passed in', () => {
      wrapper.setState({
        snapshot: snapshot
    })
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when renderFlashcards is called', () => {
      wrapper.setState({
        snapshot: snapshot
    })
    wrapper.instance().renderFlashcards();
    expect(wrapper.instance().state.flashCards).toEqual(snapshot);
    expect(wrapper.instance().state.canRemoveFlashcard).toEqual(false);
  });


  it('should update the state when resetFlashcards is called', () => {
    const mockEvent = {
     preventDefault() {},
     target: { classList: { contains: jest.fn() } }
    }
    wrapper.instance().resetFlashcards(mockEvent)
    expect(wrapper.instance().state.flashCards).toEqual('')
    expect(wrapper.instance().state.canRemoveFlashcard).toEqual(false);
  });

  it('should render the Flashcards component', () => {
    expect(wrapper.find('Flashcards').length).toEqual(1)
  });

  it('should have a default state of snapshot & updatedSavedCards set to an empty array, flashcards set to an empty string, and canBeRemoved set to false', () => {
    expect(wrapper.instance().state.canRemoveFlashcard).toEqual(false);

    expect(wrapper.state()).toEqual({ ...wrapper.state(), flashCards: '' })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), snapshot: [] })
    expect(wrapper.state()).toEqual({ ...wrapper.state(), updatedSavedCards: [] })
  });


 


})
