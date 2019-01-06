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
    let name = e.target.val;

    let chosenFlashcardSet = this.state.snapshot.filter((arr) => {
      return arr.id === name;
      console.log(chosenFlashcardSet);
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
        </header>
        <section className='snapshot-intro'>
          <div className='intro-details'>
            <h2 className='intro-headline'>Flashcards for advanced learning of programming languages and concepts.</h2>
            <p className='scroll-down'>Get Started!</p>
            <p className='arrow'>&#x25BC;</p>
          </div>
          <div className='intro-hero'>
            <div className='polaroid-image'>
              <div className='box'>
                <div className="main-headline">[snap-shot]</div>
                <section className='subhead'>
                  <p className='sub1'>noun</p>
                  <p className='sub2'>1. a brief appraisal, summary, or profile</p>
                  <p className='sub3'>2. a Software Developer Learning Tool</p>
                </section>
              </div>
            </div>
          </div>
        </section>
        <div className='snapshot-body'>
            <section className='flashcard-selections'>Browse Flashcard Languages & Concepts
              <div className='individual-flashcard-option'>
                <div className='flashcard-title-box'>Array Prototypes
                  <button className='start-flashcards' onClick={this.renderFlashcards}>Get Started</button>
                </div>
                <div classname='flashcard-image-box'>
                  <div className='flashcard-image'></div>
                </div>
              </div>
            </section>
        </div>
      <Flashcards chosenFlashcardSet={this.state.flashCards} />
      </div>
    );
  }
}

export default App;
