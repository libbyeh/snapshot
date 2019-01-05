import React, { Component } from 'react';
import Landing from './Landing';
import './App.css';
import { snapshot } from './Data';
import Flashcards from './Flashcards';


class App extends Component {
  constructor () {
    super();
    this.state = {
      Flashcards: true,
    };
    this.keys = Object.keys(this.state);
  }

  renderNext = (event) => {
    const section = event.target.classList[0];
    this.setState({
      Flashcards: true,
      [section]: false
    });
  }

  render() {
    return (
      
      <div className="App">
        <Landing renderFlashcards={this.renderNext}/>
        {
          this.keys.map( key => {
            if (this.state[key]) {
              switch (key) {
              case 'Flashcards':
                return <Flashcards key={key} />;
              
              }
            }
          })
        }
      </div>
    );
  }
}

export default App;
