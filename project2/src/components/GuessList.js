//Displays the users's guesses

import React from 'react';
import Guess from './Guess.js';

class GuessList extends React.Component{

  render(){
    return(
      <div>
        GuessList
        <Guess/>
        <Guess/>
      </div>
    );
  }
}

export default GuessList
