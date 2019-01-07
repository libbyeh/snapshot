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

  // removeFlashcard = (event) => {
  //   const savedConceptId = parseInt(event.target.id)
  //   const grabSavedConcepts = JSON.parse(localStorage.getItem('savedCard'));
  //   for (let i = 0; i < grabSavedConcepts.length; i++) {
  //     if (parseInt(grabSavedConcepts[i]) === savedConceptId) {
  //       delete grabSavedConcepts[i]
  //     }
  //     console.log('index', grabSavedConcepts[i])
  //   }
  //   console.log('grabbed', grabSavedConcepts);
  //   const updatedSavedConcepts = grabSavedConcepts.filter((id) => {
  //     return id !== null;
  //   });
  //   console.log('updated', updatedSavedConcepts);
  //   localStorage.setItem('savedCard', JSON.stringify(updatedSavedConcepts));
  //   // this.props.removeFlashcardFromSet(updatedSavedConcepts)
  // }

  clearSavedConcepts = () => {
    localStorage.clear()
    this.setState({
      flashCards: ''
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
              <h2 className='flashcard-option-title'>Guess a Prototype</h2>
              <h3 className='flashcard-definition' >{flashcardObject.definition}</h3>
              <input className='answerInput'></input>
              <button className='answer-button' onClick={this.checkAnswer}>Check Answer</button>
              <button className='next-button' onClick={this.nextQuestion}>Skip Question</button>
              <button className='reset' onClick={event => this.props.resetFlashcards(event)}>Start Over</button>
              { this.props.canRemoveFlashcard ? <button className='remove-flashcard' id={flashcardObject.id} onClick={this.clearSavedConcepts}>Clear Saved Concepts</button> : "" }
            </div>
          </div>
        </div>
      <Answer result={this.state.answerCorrect} 
              flashcardObject={this.props.chosenFlashcardSet[this.state.flashcardIndex]}
              nextQuestion={this.nextQuestion} />
      </div>
    )
   }
  }
}

      

 
   


export default Flashcards;