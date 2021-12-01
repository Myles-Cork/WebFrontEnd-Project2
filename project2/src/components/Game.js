//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';

//TODO: Receive settings from Mastermind
//      Store state of game, add methods for modifying state
//

class Game extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentguessnum: 1,
      selectedcolor: 0,
      guesses: [
        {number:1,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:2,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:3,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:4,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:5,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:6,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:7,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:8,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:9,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:10,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:11,colors: [-1,-1,-1,-1], hits:0, misses:0},
        {number:12,colors: [-1,-1,-1,-1], hits:0, misses:0}
      ],
      answer: [0,0,2,2],
      answerdisplay: [-1,-1,-1,-1],
      won: false
    };

    this.addPeg = this.addPeg.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  addPeg(pegnum,guessnum){
    let newguess = this.state.guesses;

    if(this.state.currentguessnum == guessnum){
      newguess[guessnum-1].colors[pegnum] = this.state.selectedcolor;
      this.setState(
        {
          guesses: newguess
        }
      );
    }
  }

  selectColor(index){
    this.setState(
      {
        selectedcolor: index
      }
    );
  }

  checkAnswer(){
    // check if won - set answer display
    // else check hits and misses
    //

    if(!this.state.won){
      let guessindex = this.state.currentguessnum-1;
      let g = this.state.guesses[guessindex].colors;
      let a = this.state.answer;
      let ctg = this.props.settings.colorstoguess;
      let pc = this.props.settings.possiblecolors;

      let hits = 0;
      let misses = 0;

      // Count hits
      for(let i=0; i<ctg; i++){
        if(a[i] === g[i]){
          hits=hits+1;
        }
      }

      if(hits == 4){
        console.log("won");
        this.setState(
          {
            answerdisplay: a
          }
        );
      }else{
        let colorcounts = new Array(pc);
        for (let i=0; i<pc; i++) colorcounts[i]=0;
        for (let i=0; i<ctg; i++) colorcounts[a[i]]++;
        console.log(colorcounts);

        // Count hits and misses
        for(let i=0; i<ctg; i++){
          for(let j=0; j<ctg; j++){
            console.log("g[i]="+g[i]+" a[j]="+a[j]+" colorcount:"+colorcounts[a[j]]);
            if(g[i] === a[j] && colorcounts[a[j]]!==0){
              console.log("ye");
              misses=misses+1;
              colorcounts[a[j]]--;
            }
          }
        }
        // Need to subtract hits from hits and misses to get actual num misses
        misses = misses - hits;

        let newguesses = this.state.guesses;
        newguesses[guessindex].hits = hits;
        newguesses[guessindex].misses = misses;

        this.setState(
          {
            currentguessnum: guessindex + 2,
            guesses: newguesses
          }
        );

      }

    }
  }

  render(){

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
          <ColorPicker selectedcolor={this.state.selectedcolor} select={this.selectColor}/>
          <GuessList guesses={this.state.guesses} addpeg={this.addPeg}/>
        </div>
          <FlowBar checkanswer={this.checkAnswer} answerdisplay={this.state.answerdisplay} progress="30%"/>
      </div>
    );
  }
}

export default Game
