import React, { Component } from 'react';
import './styles/main.scss';
import Flashcards from './Flashcards';

class Answer extends Component {
  constructor(props) {
    super();
    }

  render() {
    if (!this.props.result) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='answer-popup'>
        <div className='answer-body'>
          <div className='answer-polaroid-image-pop'>
            <div className='answer-box'>
              <h2 className='answer-flashcard-option-title'>Array Prototypes</h2>
              <h3 className='correct-answer' >{this.props.result}</h3>
              <button className='next-button' onClick={this.props.nextQuestion}>Next Question</button>
              <button className='reset' onClick={this.props.nextFlashcard}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
    }
  }
  

}


export default Answer;