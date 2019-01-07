import React, { Component } from 'react';
import './App.css';
import Flashcards from './Flashcards';


class App extends Component {
  constructor() {
    super();
    this.state = {
      snapshot: [],
      flashCards: ''
    }
  }

  componentDidMount(){
  fetch('http://memoize-datasets.herokuapp.com/api/v1/snapshot')
    .then(response => response.json())
    .then(data => {
      this.setState({
        snapshot: data.snapshot,
      })
    })
    .catch(error => console.log('first fetch', error))
  }

  renderFlashcards = (e) => {
    let chosenFlashcardSet = this.state.snapshot.map((arr) => {
      return arr;
    })
    this.setState({
      flashCards:chosenFlashcardSet
    })
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className='header-title'>[snap-shot]</h1>
          <h3 className='subhead'> [noun]  An appraisal or summary; also see: Flashcards</h3>
        </header>
        <section className='snapshot-intro'>
          <div className='flashcard-selections'>Browse Languages & Concepts:
            <div className='individual-flashcard-option'>
              <div className='flashcard-image'></div>
              <div className='flashcard-title-box'>Array Prototypes
                <button className='start-flashcards' onClick={this.renderFlashcards}>Start Learning</button>
              </div>

            </div>
          </div>
          <div className='intro-hero'>
            <div className='polaroid-image-main'>
              <div className='box'>
                <div className='intro-details'>
                  <h2 className='intro-headline'>Flashcards for advanced learning of programming languages and concepts.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Flashcards chosenFlashcardSet={this.state.flashCards} />
      </div>
    );
  }
}

export default App;
