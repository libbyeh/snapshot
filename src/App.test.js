import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

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


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App key= 'App'/>
      )
    wrapper.setState({
      snapshot: snapshot
    })
  })
  

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when renderFlashcards is called', () => {
    wrapper.instance().renderFlashcards();
    expect(wrapper.instance().state.flashCards).toEqual(snapshot);
    expect(wrapper.instance().state.canRemoveFlashcard).toEqual(false);
  })


  it('should update the state when resetFlashcards is called', () => {
    const mockEvent = {
     preventDefault() {},
     target: { classList: { contains: jest.fn() } }
   }
  wrapper.instance().resetFlashcards(mockEvent)
  expect(wrapper.instance().state.flashCards).toEqual('')
  expect(wrapper.instance().state.canRemoveFlashcard).toEqual(false);
})


})
