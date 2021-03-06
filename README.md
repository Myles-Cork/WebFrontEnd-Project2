# Web Front-End Development Project 2
#### Myles Cork, Zhengyuan Zhang

A recreation of the ["Mastermind"](https://en.wikipedia.org/wiki/Mastermind_(board_game)) game using React.

To setup, clone or fork repository, and run ```npm install``` inside of the ```WebFrontEnd-Project2\project2``` folder. The app can be started by running ```npm start``` from within the same ```WebFrontEnd-Project2\project2``` folder.

## Mock Up Sketch
![Mock Up](images/project2sketch3.png)

## Component Breakdown
![Component Breakdown](images/project2componentbreakdown2.png)

## [Static Version](https://creative.colorado.edu/~myco6347/fwd/Projects/Project2m2/)

## Representation of State
State will be stored in two components:

- Mastermind
  - Stores the Settings as three numbers
- Game
  - Stores guesses as an array of objects each with a number and a list of colors indices, e.g.```{number: 1, colors: [1,2,3,4]}```. The number is the number of the guess, and the color indices are numbers corresponding to colors in ColorPicker and ColorPeg.
  - Stores the correct answer as a list of color indices.
  - Stores the currently selected color as a number.
  - Stores the current guess number.

## List of Team Members and Responsibilities
- Myles Cork
  - The Game component's state and the following components it interacts with
    - Mastermind (Game will receive settings from Mastermind)
    - ColorPicker (Calling functions for changing selected color passed to it from Game. Updating the number of colors shown based on the number of possible colors setting passed to it from Game)
    - GuessList and Guess (Calling functions passed from Game to update state)
- Zhengyuan Zhang
  - The Mastermind component's state and the following components it interacts with
    - Settings (Receiving current state and functions for modifying from Mastermind. Calling functions when buttons are pressed)
    - FlowBar (Updating bar based on props passed to it from Game. Receiving functions from Game to be called when buttons are pressed)
