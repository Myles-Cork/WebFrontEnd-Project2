//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';

class Game extends React.Component{

  render(){

    const guesses = [
      {number:0,colors: [1,2,3,4]},
      {number:1,colors: [1,4,4,4]}
    ]

    return(
      <div>
        Game
        <ColorPicker/>
        <GuessList guesses={guesses}/>
        <FlowBar/>
      </div>
    );
  }
}

export default Game
