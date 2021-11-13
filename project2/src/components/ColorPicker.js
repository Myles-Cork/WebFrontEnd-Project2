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

    return(
      <div style={scrollareastyle}>
        <div style={pickerstyle}>
          <ColorPeg colorindex={0} selected={true}/>
          <ColorPeg colorindex={1} selected={false}/>
          <ColorPeg colorindex={2} selected={false}/>
          <ColorPeg colorindex={3} selected={false}/>
          <ColorPeg colorindex={4} selected={false}/>
          <ColorPeg colorindex={5} selected={false}/>
          <ColorPeg colorindex={6} selected={false}/>
          <ColorPeg colorindex={7} selected={false}/>
        </div>
      </div>
    );
  }
}

export default ColorPicker
