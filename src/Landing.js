import React, { Component } from 'react';
import './App.css';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: false
    };
  }
  
  hide = (event) => {
    this.props.renderFlashcards(event);
    this.setState({
      landingPage: false
    });
  }

  render() {
    if (this.state.landingPage) {
      return (
        <div className='landing-page'>
            <section>
              <div className='polaroid-image'>
                <div className="box">
                  <div className="main-headline">[snap-shot]</div>
                  <section className='subhead'>
                    <p className='sub1'>noun</p>
                    <p className='sub2'>1. a brief appraisal, summary, or profile</p>
                    <p className='sub3'>2. a Flashy Software Developer Learning Tool</p>
                  </section>
                  <button className='flashcards-button' onClick={this.hide}>Get Started</button>
                </div>
              </div>
            </section>
          </div>
      );
    } else {
      return (
        <div className='none'>
        </div>
      );
    }
  } 
}

export default Landing;