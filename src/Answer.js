import React, { Component } from 'react';
import './styles/main.scss';
import Flashcards from './Flashcards';
import App from './App'

class Answer extends Component {
  constructor(props) {
    super();
    }

  saveFlashcard = () => {
    localStorage.setItem('savedCard', JSON.stringify(this.props.chosenFlashcardSet))
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
              <h3 className='answer-flashcard' >{this.props.flashcardObject.answer}</h3>
              <button className='next-button' onClick={this.props.nextQuestion}>Next Question</button>
              <a className='flashcard-info-link' href={this.props.flashcardObject.link}>Learn More</a>
              <button className='save-button' onClick={this.saveFlashcard}>Save Concept</button>
            </div>
          </div>
        </div>
      </div>
    )
    }
  }
}


export default Answer;