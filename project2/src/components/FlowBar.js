//Controls the "flow" of the game. Contains buttons for advancing and ending the game.

import React from 'react';
import ColorPeg from './ColorPeg.js';

class FlowBar extends React.Component{

  render(){
    const flowBarBackGround ={
       height:"30px",
       backgroundColor:"#DDDDDD",
       boxSizing:"border-box"
    }
    const flowBarforeGround = {
      height:"30px",
      width:this.props.progress,
      backgroundColor:"red"
    }
    var count = 0
    console.log(this.props.answerdisplay)
    return(
      <div style={{width:"fit-content",display:"flex",margin:"auto"}}>
        <fieldset style={{width:"fit-content",marginLeft:"10vh"}}>
          <legend style={{padding:"0px 0px"}}>Answer</legend>
          {this.props.answerdisplay.map(eachColorPeg=><ColorPeg colorindex={eachColorPeg}/>)}
        </fieldset>
        <span>
          <button type="button" id="checkButton" style={{marginTop:"3vh"}} onClick={this.props.checkanswer}>Check the result</button>
        </span>
      </div>
    );
  }
}

export default FlowBar
