'use strict';
console.log('script.js');

let playerScore = 0;
let computerScore = 0;
let round = 0;

// Computer chooses 1 random option
function getComputersChoice() {
  let computerOptions = ['rock', 'paper', 'scissors'];
  let computersChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log('Computer picked', computersChoice);
  return computersChoice;
}

function playOneRound() {
  let playersChoice = prompt('Choose: rock paper or scissors');
  console.log(`You picked ${playersChoice}`);
  if (
    playersChoice !== 'rock' &&
    playersChoice !== 'paper' &&
    playersChoice !== 'scissors'
  ) {
    console.log('wrong input');
    return;
  }
  if (playersChoice === getComputersChoice()) {
    console.log('DRAW !');
  }
}
playOneRound();
