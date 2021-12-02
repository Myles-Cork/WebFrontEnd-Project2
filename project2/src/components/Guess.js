//Displays a guess and contains onClick handlers that calls the Game component to make new guesses. A single row of the guess list.

import React from 'react';
import ColorPeg from './ColorPeg.js';


class Guess extends React.Component{

  render(){

    const guesscontainerstyle = {
      display: "flex",
      flexDirection: "row",
      margin: "1vh",
      boxSizing:"border-box",
      border:"0.2vh solid #555555",
      backgroundColor:"#DDDDDD",
      width:"max-content"
    };

    const guessstyle = {
      display: "flex",
      flexDirection: "row",
      margin: "0.5vh",
      boxSizing:"border-box",
      border:"0.2vh solid #555555",
      backgroundColor:"#DDDDDD",
      width:"max-content"
    };

    const hitmisscontainerstyle = {
      display: "flex",
      flexDirection: "column",
      margin: "0.5vh",
      boxSizing:"border-box",
      border:"0.2vh solid #555555",
      width:"max-content",
      justifyContent:"center"
    };

    const numcontainerstyleunselected = {
      marginLeft: "1vh",
      marginRight: "1vh",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: "center",
      width: "2.5em",
      fontSize: "2vh",
      backgroundColor: "transparent",
      borderRadius: "1vh"
    };

    const numcontainerstyleselected = {
      marginLeft: "1vh",
      marginRight: "1vh",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: "center",
      width: "2.5em",
      fontSize: "2vh",
      backgroundColor: "#999999",
      borderRadius: "1vh"
    };

    const pegcontainerstyle = {
      display: "flex"
    };

    const hitmissstyle = {
      marginLeft: "1vh",
      marginRight: "1vh",
      marginTop: "auto",
      marginBottom: "auto",
      fontSize: "1.8vh"
    };

    let num = this.props.number;

    let colors = this.props.colors;
    let numcolors = colors.length;
    let indexes = new Array(numcolors);
    for(let i = 0; i < numcolors; i++) indexes[i]=i;

    let numcontainerstyle= numcontainerstyleunselected;
    if(num === this.props.currentguess){
      numcontainerstyle = numcontainerstyleselected;
    }

    return(
        <div style={guesscontainerstyle}>
          <span style={numcontainerstyle}>{num}</span>
          <div style={guessstyle}>
            {indexes.map(index => <div style={pegcontainerstyle} onClick={()=>this.props.addpeg(index,num)}><ColorPeg colorindex={colors[index]}/></div>)}
          </div>
          <div style={hitmisscontainerstyle}>
            <span style={hitmissstyle}>Hits: {this.props.hits}</span>
            <span style={hitmissstyle}>Misses: {this.props.misses}</span>
          </div>
      </div>
    );
  }
}

export default Guess
