//Displays a guess and contains onClick handlers that calls the Game component to make new guesses. A single row of the guess list.

import React from 'react';

class Guess extends React.Component{

  render(){
    let num = this.props.number.toString();

    return(
      <div>
        Guess {num}
      </div>
    );
  }
}

export default Guess
