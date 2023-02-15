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
  let computersChoice = getComputersChoice();
  if (playersChoice === computersChoice) {
    console.log('DRAW !');
  } else if (
    (playersChoice === 'rock' && computersChoice === 'scissors') ||
    (playersChoice === 'paper' && computersChoice === 'rock') ||
    (playersChoice === 'scissors' && computersChoice === 'paper')
  ) {
    console.log('YOU WIN!');
    return;
  } else {
    console.log('YOU LOST!');
    return;
  }
}
