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
    let result = ''
    if (userAnswer === correctAnswer) {
      result = "Correct!"
    } else {
      result = 'Incorrect'
    }
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
      flashcardIndex: nextFlashcard,
      answerCorrect: null
    })
  }

  clearSavedConcepts = () => {
    localStorage.clear()
    this.setState({
      flashCards: ''
    })
  }
   
  exitToMain = (event) => {
    this.setState({
      flashcardIndex: 0
    })
    this.props.resetFlashcards(event)
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
              <h2 className='flashcard-option-title'>Guess a Prototype Method</h2>
              <h3 className='flashcard-definition' >{flashcardObject.definition}</h3>
              <h4 className='flashcard-number'>{flashcardObject.id} of 30</h4>
              <div classname='button-input-section'>
                <input className='answerInput'></input>
                <button className='answer-button' onClick={this.checkAnswer}>Check Answer</button>
                <button className='next-button' onClick={this.nextQuestion}>Skip Question</button>
                <button className='reset' onClick={event => this.exitToMain(event)}>Start Over</button>
                { this.props.canRemoveFlashcard ? <button className='remove-flashcard' id={flashcardObject.id} onClick={this.clearSavedConcepts}>Clear Saved Concepts</button> : "" }
              </div>
            </div>
          </div>
        </div>
      <Answer result={this.state.answerCorrect} 
              flashcardObject={this.props.chosenFlashcardSet[this.state.flashcardIndex]}
              nextQuestion={this.nextQuestion} 
              renderSavedFlashcards={this.props.renderSavedFlashcards} />
      </div>
    )
   }
  }
}

      

 
   


export default Flashcards;