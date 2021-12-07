//Displays possible colors. Has onClick handlers for picking a color to input into the next guess. Calls a function in the Game component to do this.

import React from 'react';
import ColorPeg from './ColorPeg.js';

class ColorPicker extends React.Component{

  render(){
    const scrollareastyle = {
      display:"flex",
      flexDirection:"column",
      margin:"1vh",
      backgroundColor:"#EEEEEE"
    };

    const pickerstyle = {
      display:"flex",
      position: "-webkit-sticky",
      position: "sticky",
      top: 10,
      flexDirection:"column",
      width:"min-content",
      height:"min-content",
      margin:"1vh",
      padding:"0.25vh",
      border:"0.2vh solid #555555",
      backgroundColor:"#DDDDDD"
    };

    const pegcontainerstyle = {
      display: "flex"
    };

    let pc = this.props.possiblecolors;
    let colors = new Array(pc);
    for(let i = 0; i < pc; i++) colors[i]=i;

    return(
      <div style={scrollareastyle}>
        <div style={pickerstyle}>
          {colors.map(color => <div key={color} style={pegcontainerstyle} onClick={()=>this.props.select(color)}><ColorPeg colorindex={color} selected={this.props.selectedcolor===color}/></div>)}
        </div>
      </div>
    );
  }
}

export default ColorPicker
