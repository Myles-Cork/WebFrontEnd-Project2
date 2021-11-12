//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';

class Game extends React.Component{

  render(){

    const gameSettings = {attempts: 12}

    return(
      <div>
        Game
        <ColorPicker/>
        <GuessList/>
        <FlowBar/>
      </div>
    );
  }
}

export default Game
