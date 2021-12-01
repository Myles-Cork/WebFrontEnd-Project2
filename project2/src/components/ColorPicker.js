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

    return(
      <div style={scrollareastyle}>
        <div style={pickerstyle}>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(0)}><ColorPeg colorindex={0} selected={this.props.selectedcolor===0}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(1)}><ColorPeg colorindex={1} selected={this.props.selectedcolor===1}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(2)}><ColorPeg colorindex={2} selected={this.props.selectedcolor===2}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(3)}><ColorPeg colorindex={3} selected={this.props.selectedcolor===3}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(4)}><ColorPeg colorindex={4} selected={this.props.selectedcolor===4}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(5)}><ColorPeg colorindex={5} selected={this.props.selectedcolor===5}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(6)}><ColorPeg colorindex={6} selected={this.props.selectedcolor===6}/></div>
          <div style={pegcontainerstyle} onClick={()=>this.props.select(7)}><ColorPeg colorindex={7} selected={this.props.selectedcolor===7}/></div>
        </div>
      </div>
    );
  }
}

export default ColorPicker
