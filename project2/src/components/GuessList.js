//Displays the users's guesses

import React from 'react';
import Guess from './Guess.js';

class GuessList extends React.Component{
  render(){

    const guessliststyle = {
      backgroundColor:"#EEEEEE"
    };

    return(
      <div style={guessliststyle}>
          {this.props.guesses.map(guess => <Guess key={guess.number} number={guess.number} colors={guess.colors} hits={guess.hits} misses={guess.misses} addpeg={this.props.addpeg}/>)}
      </div>
    );
  }
}

export default GuessList
