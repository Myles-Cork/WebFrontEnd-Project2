//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';

//TODO: Receive settings from Mastermind
//      Store state of game, add methods for modifying state
//

class Game extends React.Component{

  render(){
    const guesses = [
      {number:1,colors: [0,1,2,3]},
      {number:2,colors: [4,5,6,7]},
      {number:3,colors: [1,4,0,0]},
      {number:4,colors: [2,2,4,4]},
      {number:5,colors: [1,1,5,6]},
      {number:6,colors: [3,3,6,6]},
      {number:7,colors: [-1,-1,-1,-1]},
      {number:8,colors: [-1,-1,-1,-1]},
      {number:9,colors: [-1,-1,-1,-1]},
      {number:10,colors: [-1,-1,-1,-1]},
      {number:11,colors: [-1,-1,-1,-1]},
      {number:12,colors: [-1,-1,-1,-1]}
    ]

    const pickerguessstyle = {
      display:"flex",
      flexDirection:"row",
      width:"min-content",
      margin:"auto"
    };

    // checkanswer will return a function 
    return(
      <div>
        <div style={pickerguessstyle}>
          <ColorPicker/>
          <GuessList guesses={guesses}/>
        </div>
          <FlowBar checkanswer="temp" answerdisplay={[0,1,2,3]} progress="30%"/>
      </div>
    );
  }
}

export default Game
