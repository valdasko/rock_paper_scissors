'use strict';
console.log('script.js');

const roundResultEl = document.getElementById('roundResult');
const playerText = document.getElementById('playersPick');
const computerText = document.getElementById('computersPick');
const playerResult = document.getElementById('playerResult');
const computerResult = document.getElementById('computerResult');
const gameWinnerEl = document.getElementById('gameWinner');

// const playAgainBtn = document.createElement('button');
// playAgainBtn.textContent = 'Play Again?';
// gameWinnerEl.after(playAgainBtn);

let playerScore = 0;
let computerScore = 0;
let round = 0;
let computersChoice;

// Computer chooses 1 random option
function getComputersChoice() {
  let computerOptions = ['Rock', 'Paper', 'Scissors'];
  computersChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computersChoice;
}
// if (computerScore === 5 || playerScore === 5) {
//   alert('Game Over');

function playOneRound(playersChoice) {
  computersChoice = getComputersChoice();
  computerText.textContent = computersChoice;
  if (playersChoice === computersChoice) {
    roundResultEl.textContent = 'Draw';
    roundResultEl.style.color = 'yellow';
    return;
  } else if (
    (playersChoice === 'Rock' && computersChoice === 'Scissors') ||
    (playersChoice === 'Paper' && computersChoice === 'Rock') ||
    (playersChoice === 'Scissors' && computersChoice === 'Paper')
  ) {
    let playerWin = 'You WIN';
    roundResultEl.textContent = 'Player Win';
    roundResultEl.style.color = 'green';
    playerScore++;
    playerResult.textContent = playerScore.toString();
    if (playerScore === 5) {
      roundResultEl.textContent = 'Game Over. Player Won';
    } else {
      return playerScore;
    }
  } else {
    // let computerWin = 'Computer WIN';
    roundResultEl.textContent = 'You lost';
    roundResultEl.style.color = 'red';
    computerScore++;
    computerResult.textContent = computerScore.toString();
    if (computerScore === 5) {
      roundResultEl.textContent = 'Game Over. Computer Won';
    } else return computerScore;
  }
}

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let resetBtn = document.getElementById('resetBtn');

rockBtn.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    alert('Press Play again');
  } else {
    playerText.textContent = 'Rock';
    playOneRound('Rock');
  }
});

paperBtn.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    alert('Press Play again');
  } else {
    playerText.textContent = 'Paper';
    playOneRound('Paper');
  }
});

scissorsBtn.addEventListener('click', () => {
  if (playerScore === 5 || computerScore === 5) {
    alert('Press Play again');
  } else {
    playerText.textContent = 'Scissors';
    playOneRound('Scissors');
  }
});

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerResult.textContent = playerScore;
  computerResult.textContent = computerScore;
  roundResultEl.textContent = 'Can you beat the computer?';
  roundResultEl.style.color = 'white';
});
