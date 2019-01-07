import React, { Component } from 'react';
import './styles/main.scss';


class Flashcards extends Component {
  constructor(props) {
    super()
  }

  render () {
    if (!this.props.chosenFlashcardSet) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='pop-up'>
        <div className='flashcard-body'>
          <div className='polaroid-image'>
            <div className='array-cards'>
              <h2 className='flashcard-definition' >{this.props.chosenFlashcardSet.definition}</h2>
              <input></input>
              <button className='answer-button'>Check Answer</button>
            </div>
          </div>
        </div>
      </div>
    )
   }
  }
}

      

 
   


export default Flashcards;