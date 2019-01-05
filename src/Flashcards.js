import React, { Component } from 'react';
import { snapshot } from './Data';
import './App.css';

class Flashcards extends Component {
  constructor() {
    super();
    this.state = {
      snapshot: []
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

  render() {
    return (
      <div className='flashcards-page'>
        <header className='header'>
          <h1 className='header-title'>[snap-shot]</h1>
        </header>
        <section className='flashcard-intro'>
          <div className='polaroid-image'>
            <div className="box">
              <div className="main-headline">[snap-shot]</div>
              <section className='subhead'>
                <p className='sub1'>noun</p>
                <p className='sub2'>1. a brief appraisal, summary, or profile</p>
                <p className='sub3'>2. a Flashy Software Developer Learning Tool</p>
              </section>
            </div>
          </div>
        </section>
       {
        this.state.snapshot.map((arr) => {
          return (
            <div className='flashcard-body'>
              <div className='polaroid-image'>
                <div className='array-cards'>
                  <h2 className='flashcard-definition'>{arr.definition}</h2>
                  <input></input>
                  <button className='answer-button'>Check Answer</button>
                </div>
              </div>
            </div>
          )
        })
       }
      </div>
    )
  }
}


export default Flashcards;