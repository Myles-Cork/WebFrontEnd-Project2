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
    }

    const numcontainerstyle = {
      marginLeft: "1vh",
      marginRight: "1vh",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: "center",
      width: "2.5em",
      fontSize: "2vh"
    }

    const hitmissstyle = {
      marginLeft: "1vh",
      marginRight: "1vh",
      marginTop: "auto",
      marginBottom: "auto",
      fontSize: "1.8vh"
    }


    let num = this.props.number.toString();

    return(
        <div style={guesscontainerstyle}>
          <span style={numcontainerstyle}>{num}</span>
          <div style={guessstyle}>
            <ColorPeg colorindex={this.props.colors[0]}/>
            <ColorPeg colorindex={this.props.colors[1]}/>
            <ColorPeg colorindex={this.props.colors[2]}/>
            <ColorPeg colorindex={this.props.colors[3]}/>
          </div>
          <div style={hitmisscontainerstyle}>
            <span style={hitmissstyle}>Hits: 0</span>
            <span style={hitmissstyle}>Misses: 0</span>
          </div>
      </div>
    );
  }
}

export default Guess
