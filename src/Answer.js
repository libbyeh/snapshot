import React, { Component } from 'react';
import './styles/main.scss';
import Flashcards from './Flashcards';

class Answer extends Component {
  constructor(props) {
    super();
    }

  render() {

    return (
      <div className='answer-popup'>
        <h1 className='correct-answer' >{this.props.correctAnswer}</h1>
        <button className='next-button' onClick={this.props.nextQuestion}>Next Question</button>
      </div>

    )
   }
  

}


export default Answer;