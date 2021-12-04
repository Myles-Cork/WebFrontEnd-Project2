//Holds a html form for changing game settings.

import React from 'react';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStop = this.handleChangeStop.bind(this);
  }


  handleChange(){
    let newOption1 = document.getElementById("colorGuessMenu").value;
    let newOption2 = document.getElementById("possibleColor").value;
    let newOption3 = document.getElementById("attemptAmount").value;
    this.props.startGameCondition(parseInt(newOption1),parseInt(newOption2),parseInt(newOption3),false,"auto",false);
  }

  handleChangeStop(){
    let newOption1 = document.getElementById("colorGuessMenu").value;
    let newOption2 = document.getElementById("possibleColor").value;
    let newOption3 = document.getElementById("attemptAmount").value;
    this.props.toggelReset(parseInt(newOption1),parseInt(newOption2),parseInt(newOption3),false,"auto",true);
  }

  render(){
    const style ={
       width:"70%",
       margin:"2% auto",
       textAlign:"center",
       border:"0.2vh solid #555555",
       backgroundColor:"#DDDDDD"
    }

    const settingItemStyle = {
       margin:"1px"
    }

    const fieldSetColor ={
      backgroundColor:"#EEEEEE"
    }

    return(
      <div style={style}>
          <fieldset style={fieldSetColor}>
          <legend>Description/Objective</legend>
          <p>Mastermind or Master Mind is a code-breaking game for two players.
            The modern game with pegs was invented in 1970 by Mordecai Meirowitz,
            an Israeli postmaster and telecommunications expert.[1][2] It resembles an earlier pencil
            and paper game called Bulls and Cows that may date back a century.</p>
            <ol>
              <li>a decoding board, with a shield at one end covering a row of four large holes,
                and twelve (or ten, or eight, or six) additional rows containing four large holes next to a set of four small holes</li>
              <li>code pegs of six different colors (or more; see Variations below),
                with round heads, which will be placed in the large holes on the board</li>
              <li>key pegs, some colored black, some white, which are flat-headed and smaller than the code pegs; they will be placed in the small holes on the board.</li>
          </ol>
          </fieldset>
          <fieldset style={fieldSetColor}>
            <legend>Game Settings</legend>
            <div style={settingItemStyle}>
            <label htlmfor="colorGuessAmount">Colors to guess</label>
            <select name="colorGuessMenu" id="colorGuessMenu" defaultValue = {4} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            </div>
            <br/>
            <div style={settingItemStyle}>
            <label htlmfor="possibleColor">Possible Colors</label>
            <select name="possibleColor" id="possibleColor" defaultValue = {8}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            </div>
            <br/>
            <div style={settingItemStyle}>
            <label htlmfor="attemptAmount">Attempts</label>
            <select name="attemptAmount" id="attemptAmount" defaultValue = {12}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            </div>
            <div style={settingItemStyle}>
              <button type="button" onClick={this.handleChange} id="startButton">Start!</button>
              <button type="button" onClick={this.handleChangeStop} id="stopButton">Save Settings!</button>
            </div>
          </fieldset>
      </div>
    )
  }
}

export default Settings
