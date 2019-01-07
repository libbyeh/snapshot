import React, { Component } from 'react';
import './styles/main.scss';
import Answer from './Answer';



class Flashcards extends Component {
  constructor(props) {
    super();
    this.state = {
      answerCorrect: null,
      submitAnswer: false,
      flashcardIndex: 0
    }
  }

  checkAnswer = () => {
    const userAnswer = document.querySelector('.answerInput').value
    const correctAnswer = this.props.chosenFlashcardSet[this.state.flashcardIndex].answer 
    alert(userAnswer + correctAnswer);
    let result = ''
    if (userAnswer === correctAnswer) {
      result = "Correct"
    } else {
      result = 'Incorrect'
    }
    alert(result)
    this.setState({
      submitAnswer: true,
      answerCorrect: result
    })
  }

  nextQuestion = () => {
    let nextFlashcard = this.state.flashcardIndex + 1;
    if (nextFlashcard === this.props.chosenFlashcardSet.length) {
      nextFlashcard = 0
    } 
    this.setState({
      flashcardIndex: nextFlashcard
    })
  }

  render () {
    if (!this.props.chosenFlashcardSet) {
      return ( <div className='none'></div> );
    } else {
      const flashcardObject = this.props.chosenFlashcardSet[this.state.flashcardIndex]
    return (
      <div className='flashcard-pop-up'>
        <div className='flashcard-body'>
          <div className='polaroid-image-pop'>
            <div className='array-cards'>
              <h2 className='flashcard-definition' >{flashcardObject.definition}</h2>
              <input className='answerInput'></input>
              <button className='answer-button' onClick={this.checkAnswer}>Check Answer</button>
                <button className='next-button' onClick={this.nextQuestion}>Next Question</button>
            </div>
          </div>
        </div>
      <Answer checkAnswer={this.checkAnswer} />
      </div>
    )
   }
  }
}

      

 
   


export default Flashcards;