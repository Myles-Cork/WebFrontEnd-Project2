//Handles the passing of information from the Settings component to the Game component.

import React from 'react';
import Settings from './Settings.js';
import Game from './Game.js';

class Mastermind extends React.Component{

  render(){

    const gameSettings = {attempts: 12}

    return(
      <div>
        <h1 style={{backgroundColor:"#DDDDDD",textAlign:"center"}}>Mastermind</h1>
        <Settings/>
        <Game settings={gameSettings}/>
      </div>
    );
  }
}

export default Mastermind
