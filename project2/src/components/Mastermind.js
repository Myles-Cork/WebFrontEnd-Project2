//Handles the passing of information from the Settings component to the Game component.

import React from 'react';
import Settings from './Settings.js';
import Game from './Game.js';

class Mastermind extends React.Component{
  constructor(props){
    super(props);
    this.state={
      gameSettings:
      {colorstoguess:4,
        possiblecolors:8,
        attempts:12,
<<<<<<< HEAD
        autoCheck:false,
        Reset:"auto",
        reset:true}
      };
    this.startGameCondition = this.startGameCondition.bind(this);
    this.toggelReset = this.toggelReset(this);
  }

  startGameCondition(color,possible,attempt,autoCheck,Reset,reset){
    this.setState({gameSettings:{colorstoguess:color,possiblecolors:possible,attempts:attempt,autoCheck:autoCheck,Reset:Reset,reset:false}});
    console.log("this is start")
    console.log(this.state);
  }

  toggelReset(color,possible,attempt,autoCheck,Reset,reset){
    console.log("this is stop");
    console.log(this.state);
    this.setState({gameSettings:{colorstoguess:color,possiblecolors:possible,attempts:attempt,autoCheck:autoCheck,Reset:Reset,reset:false}});
=======
        autoCheck:true,
        reset:false}
      };
    this.toggelReset = this.toggelReset.bind(this);
    this.toggelReset1 = this.toggelReset1.bind(this);
  }

  toggelReset(color,possible,attempt){
    console.log(this.state);
    let toggledreset = !this.state.gameSettings.reset;
    this.setState({gameSettings:{colorstoguess:color,possiblecolors:possible,attempts:attempt,reset:toggledreset}});
  }

  toggelReset1(){
    console.log(this.state);
    let toggledreset = !this.state.gameSettings.reset;
    this.setState({gameSettings:{reset:toggledreset}});
>>>>>>> 1204f4fc44e89b822e6714f425f0887a9723408b
  }

  render(){
    return(
      <div>
        <h1 style={{backgroundColor:"#DDDDDD",textAlign:"center"}}>Mastermind</h1>
<<<<<<< HEAD
        <Settings startGameCondition = {this.startGameCondition} stopGame = {this.toggelReset}/>
        <Game settings={this.state.gameSettings}/>
=======
        <Settings startGameCondition = {this.startGameCondition} toggelReset = {this.toggelReset}/>
        <Game settings={this.state.gameSettings} toggelReset = {this.toggelReset1}/>
>>>>>>> 1204f4fc44e89b822e6714f425f0887a9723408b
        {/* https://stackoverflow.com/questions/30041111/is-there-a-way-in-which-i-can-ignore-touch-events-on-text-in-react-native */}
      </div>
    );
  }
}

export default Mastermind
