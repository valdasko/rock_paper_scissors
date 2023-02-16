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

// Plays one round
function playOneRound(playersChoice) {
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
    return;
  } else if (
    (playersChoice === 'rock' && computersChoice === 'scissors') ||
    (playersChoice === 'paper' && computersChoice === 'rock') ||
    (playersChoice === 'scissors' && computersChoice === 'paper')
  ) {
    let playerWin = 'You WIN';
    console.log('YOU WIN!');
    playerScore++;
    return playerWin;
  } else {
    let computerWin = 'You lost';
    console.log('YOU LOST!');
    computerScore++;
    return computerWin;
    // return computerWin;
  }
}
function game() {
  for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
    playOneRound();
    console.log(`Players score: ${playerScore}`);
    console.log(`Computers score: ${computerScore}`);
  }
}
// game();

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

// rockBtn.addEventListener('click', () => {
//   playOneRound('rock');
// });

// paperBtn.addEventListener('click', () => {
//   playOneRound('paper');
// });

// scissorsBtn.addEventListener('click', () => {
//   playOneRound('scissors');
// });
