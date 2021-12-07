//Holds a html form for changing game settings.

import React from 'react';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeStop = this.handleChangeStop.bind(this);
  }

  handleChangeStop(){
    let newOption1 = document.getElementById("colorGuessMenu").value;
    let newOption2 = document.getElementById("possibleColor").value;
    let newOption3 = document.getElementById("attemptAmount").value;
    this.props.toggelReset(parseInt(newOption1),parseInt(newOption2),parseInt(newOption3));
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
          <p>Guess the correct permutation of colors before you run out of attempts!</p>
          <p>Click on a color from the left panel to select a color to place.
          Click one of the spots in the current guess row to the right to enter the color into the guess.
          Fill the row and press “Check the Result” to see if you’re correct.
          If you are, the correct answer will be displayed at the bottom of the page.
          If not, see the number of "Hits" and "Misses" to the right of the guess to narrow down your next guesses.</p>
          <ul>
            <li>Hits are the number of colors in the same position as the answer.</li>
            <li>Misses are the number of colors in the guess that are in the answer, but in the wrong position.</li>
          </ul>
          <p>The answer will be randomly generated from the possible colors, duplicates allowed.</p>
          <p>Change the game settings to customize the difficulty or enable auto check to enter a guess once a row is filled.</p>
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
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
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
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            </div>
            <br/>
            <div style={settingItemStyle}>
            <label htlmfor="autoCheck">Auto Check</label>
            <select name="autoCheck" id="autoCheck" defaultValue = {1}>
              <option value="1">on</option>
              <option value="0">off</option>
            </select>
            </div>
            <div style={settingItemStyle}>
              <button type="button" onClick={this.handleChangeStop} id="stopButton">Save Settings!</button>
            </div>
          </fieldset>
      </div>
    )
  }
}

export default Settings
