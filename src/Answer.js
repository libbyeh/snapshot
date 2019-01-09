import React, { Component } from 'react';
import './styles/main.scss';
import Flashcards from './Flashcards';
import App from './App'

class Answer extends Component {

  saveFlashcard = () => {
    const savedCard = JSON.parse(localStorage.getItem('savedCard'))
    if (!savedCard) {
      localStorage.setItem('savedCard', JSON.stringify([this.props.flashcardObject]))
    } else {
      savedCard.push(this.props.flashcardObject)
      localStorage.setItem('savedCard', JSON.stringify(savedCard))
    }
  }

  render() {
    if (!this.props.result) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='answer-body'>
        <div className='answer-polaroid-image-pop'>
          <div className='answer-box'>
            <h2 className='answer-flashcard-option-title'>Guess a Prototype Method</h2>
            <h3 className='result-answer' >{this.props.result}</h3>
            <div className='answer-section'>
              <h3 className='correct-answer' >Correct Answer:  {this.props.flashcardObject.answer}</h3>
              <button className='save-button' onClick={this.saveFlashcard}>Save Flashcard to Practice More</button>
            </div>
            <a className='flashcard-info-link' target='_blank' rel='noopener noreferrer' href={this.props.flashcardObject.link}>Learn More</a>
            <button className='back-flashcard-button' onClick={this.props.nextQuestion}>Next Question</button>
          </div>
        </div>
      </div>
    )
    }
  }
}


export default Answer;