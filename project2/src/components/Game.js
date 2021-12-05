//Contains the game components.

import React from 'react';
import ColorPicker from './ColorPicker.js';
import GuessList from './GuessList.js';
import FlowBar from './FlowBar.js';


class Game extends React.Component{

  constructor(props){
    super(props);

    let attempts = this.props.settings.attempts;
    let guesses = this.getResetGuesses();
    let answer = this.getNewAnswer();

    let possiblecolors = this.props.settings.possiblecolors;
    let colorstoguess = this.props.settings.colorstoguess;
    let autoCheck = this.props.settings.autoCheck;
    let answerdisplay = new Array(colorstoguess);
    for (let i=0; i<colorstoguess; i++) answerdisplay[i]=-1;

    this.state={
      currentguessnum: 1,
      possiblecolors: possiblecolors,
      colorstoguess: colorstoguess,
      autoCheck: autoCheck,
      attempts: attempts,
      selectedcolor: 0,
      guesses: guesses,
      answer: answer,
      answerdisplay: answerdisplay,
      end: false
    };

    this.addPeg = this.addPeg.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.getNewAnswer = this.getNewAnswer.bind(this);
    this.getResetGuesses = this.getResetGuesses.bind(this);


  }

  getNewAnswer(){
    let possiblecolors = this.props.settings.possiblecolors;
    let colorstoguess = this.props.settings.colorstoguess;

    let newAnswer = new Array(colorstoguess);
    for (let i=0; i<colorstoguess; i++) newAnswer[i]=Math.floor(Math.random()*(possiblecolors));

    //print answer to debug
    // console.log(newAnswer);

    return newAnswer;
  }

  getResetGuesses(){
    let attempts = this.props.settings.attempts;
    let possiblecolors = this.props.settings.possiblecolors;
    let colorstoguess = this.props.settings.colorstoguess;
    let guesses = new Array(attempts);

    for(let i=0; i<attempts; i++){
      let emptypins = new Array(colorstoguess);
      for(let i=0; i<colorstoguess; i++) emptypins[i]=-1;
      guesses[i]={number:i+1,colors: emptypins, hits:0, misses:0};
    }


    return guesses;
  }

  addPeg(pegnum,guessnum){
    if(!this.state.end){
      let newguess = this.state.guesses;

      if(this.state.currentguessnum == guessnum){
        newguess[guessnum-1].colors[pegnum] = this.state.selectedcolor;
        this.setState(
          {
            guesses: newguess
          }
        );
      }

      if(this.state.autoCheck){
        // check if all pegs are placed in guess for auto check
        let g = this.state.guesses[guessnum-1].colors;
        let ctg = this.state.colorstoguess;
        let pc = this.state.possiblecolors;
        let filled = true;
        for(let p=0; p<ctg; p++){
          if(g[p]===-1){
            filled = false;
            break;
          }
        }
        if(filled) this.checkAnswer();
      }
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
    // check if end - set answer display
    // else - check hits and misses and increment to next guess
    let guessindex = this.state.currentguessnum-1;
    let newguesses = this.state.guesses;

    if(!this.state.end){
      let attempts = this.state.attempts;
      let g = this.state.guesses[guessindex].colors;
      let a = this.state.answer;
      let ctg = this.state.colorstoguess;
      let pc = this.state.possiblecolors;

      // check if all pegs are placed in guess
      let filled = true;
      for(let p=0; p<ctg; p++){
        if(g[p]===-1){
          filled = false;
          break;
        }
      }

      // only check answer and advance if filled
      if(filled){
        let hits = 0;
        // missmask is used to mark and remove hits for calculating the number of misses
        let missmask = new Array(ctg);
        let misses = 0;

        // Count hits
        for(let i=0; i<ctg; i++){
          if(a[i] === g[i]){
            hits=hits+1;
            missmask[i]=false;
          }else{
            missmask[i]=true;
          }
        }

        if(hits === ctg){
          newguesses[guessindex].hits = ctg;
          newguesses[guessindex].misses = 0;
          this.setState(
            {
              guesses: newguesses,
              answerdisplay: a,
              end: true
            }
          );
        }else{
          // Count misses

          // remove hits from guess and answer
          let gfiltered = g.filter((item,index) => missmask[index])
          let afiltered = a.filter((item,index) => missmask[index])

          // count color occurrences remaining in filtered guess and answer
          let gcolorcounts = new Array(pc);
          let acolorcounts = new Array(pc);
          for (let i=0; i<pc; i++){
            gcolorcounts[i] = 0;
            acolorcounts[i] = 0;
          }
          for (let c=0; c<ctg-hits; c++) {
            gcolorcounts[gfiltered[c]]++;
            acolorcounts[afiltered[c]]++;
          }

          // misses is the sum of the minimum color counts between filtered guesses and answers
          for(let i=0; i<pc; i++){
            misses+=Math.min(gcolorcounts[i],acolorcounts[i]);
          }

          newguesses[guessindex].hits = hits;
          newguesses[guessindex].misses = misses;

          this.setState(
            {
              currentguessnum: guessindex + 2,
              guesses: newguesses
            }
          );
        }

        if(this.state.currentguessnum === attempts){
          this.setState(
            {
              answerdisplay: a,
              end: true
            }
          );
        }
      }
    }
  }

  render(){

    const pickerguessstyle = {
      display:"flex",
      flexDirection:"row",
      width:"min-content",
      margin:"auto",
      pointerEvents:"auto"
    };

    return(
      <div>
        <div style={pickerguessstyle}>
          <ColorPicker selectedcolor={this.state.selectedcolor} select={this.selectColor} possiblecolors={this.state.possiblecolors}/>
          <GuessList guesses={this.state.guesses} currentguess={this.state.currentguessnum} addpeg={this.addPeg}/>
        </div>
          <FlowBar checkanswer={this.checkAnswer} answerdisplay={this.state.answerdisplay} progress="30%"/>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.settings.reset){
      this.props.toggelReset();
        let attempts = this.props.settings.attempts;
        let guesses = this.getResetGuesses();
        let answer = this.getNewAnswer();

        let possiblecolors = this.props.settings.possiblecolors;
        let colorstoguess = this.props.settings.colorstoguess;
        let autoCheck = this.props.settings.autoCheck;
        let answerdisplay = new Array(colorstoguess);
        for (let i=0; i<colorstoguess; i++) answerdisplay[i]=-1;

        this.setState({
          currentguessnum: 1,
          possiblecolors: possiblecolors,
          colorstoguess: colorstoguess,
          autoCheck: autoCheck,
          attempts: attempts,
          selectedcolor: 0,
          guesses: guesses,
          answer: answer,
          answerdisplay: answerdisplay,
          end: false
        });

        console.log(this.state);
    }
  }
}

export default Game
