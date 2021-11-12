//Displays the users's guesses

import React from 'react';
import Guess from './Guess.js';

class GuessList extends React.Component{
  render(){
    return(
      <div>
        GuessList
        <ul>
          {this.props.guesses.map(guess => <Guess key={guess.number} number={guess.number}/>)}
        </ul>
      </div>
    );
  }
}

export default GuessList
