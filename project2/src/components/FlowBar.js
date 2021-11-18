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
    return(
      <div style={{textAlign:"center",width:"70%",margin:"auto",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <div style={{width:"100%"}}>Progress Bar</div>
        <div className="container" style={{width:"70%",margin:"0% 0%"}}>
          <div style={flowBarBackGround}>
              <div style={flowBarforeGround}>
              </div>
              <div>
                <ColorPeg colorindex={this.props.answerdisplay[0]}/>
                <ColorPeg colorindex={this.props.answerdisplay[1]}/>
                <ColorPeg colorindex={this.props.answerdisplay[2]}/>
                <ColorPeg colorindex={this.props.answerdisplay[3]}/>
              </div>
            </div>
        </div>
        <div style={{width:"30%",boxSizing:"border-box",margin:"0% 0%"}}>
          <button type="button" id="checkButton" style={{position:"relative",float:"center"}}>Check the result</button>
        </div>
      </div>
    );
  }
}

export default FlowBar
