//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';

class Game extends React.Component{

  render(){

    const guesses = [
      {number:0,colors: [0,1,2,3]},
      {number:1,colors: [4,5,6,7]},
      {number:2,colors: [1,4,0,0]},
      {number:3,colors: [2,2,4,4]},
      {number:4,colors: [1,1,5,6]},
      {number:5,colors: [3,3,6,6]},
      {number:6,colors: [-1,-1,-1,-1]},
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
      width:"min-content"
    };

    return(
      <div>
        <div style={pickerguessstyle}>
          <ColorPicker/>
          <GuessList guesses={guesses}/>
        </div>
        <FlowBar/>
      </div>
    );
  }
}

export default Game
