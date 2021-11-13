//Renders a colored peg (circle) based on the given colorindex. -1 is no peg.

import React from 'react';

class ColorPeg extends React.Component{

  render(){
    const colors = [
      '#FF0000', //0 red
      '#00FF00', //1 green
      '#0000FF', //2 blue
      '#FFFF00', //3 yellow
      '#FF00FF', //4 magenta
      '#00FFFF', //5 cyan
      '#FFFFFF', //6 white
      '#000000'  //7 black
    ];

    let colorindex = this.props.colorindex;
    let colorhex = colors[0];

    if(colorindex < colors.length){
      colorhex = colors[colorindex];
    }

    const fillstyle = {
      display:"inline-block",
      margin:"1vh",
      height:"4vh",
      width:"4vh",
      backgroundColor: colorhex,
      borderRadius: "50%"
    };

    const fillselectedstyle = {
      display:"inline-block",
      margin:"1vh",
      height:"4vh",
      width:"4vh",
      backgroundColor: colorhex,
      borderRadius: "50%",
      boxSizing: "border-box",
      border:"0.75vh solid #555555"
    };

    const emptystyle = {
      display:"inline-block",
      margin:"2vh",
      height:"2vh",
      width:"2vh",
      backgroundColor: "#555555",
      borderRadius: "50%"
    };

    let pegstyle = fillstyle;
    if(colorindex === -1){
      pegstyle = emptystyle;
    }
    if(this.props.selected === true){
      pegstyle = fillselectedstyle;
    }

    return(
      <div style={pegstyle}/>
    );
  }
}

export default ColorPeg
