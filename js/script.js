'use strict';
console.log('script.js');

const roundResultEl = document.getElementById('roundResult');
const playerText = document.getElementById('playersPick');
const computerText = document.getElementById('computersPick');
const playerResult = document.getElementById('playerResult');
const computerResult = document.getElementById('computerResult');

let playerScore = '0';
let computerScore = '0';
let round = '0';
let computersChoice;

// Computer chooses 1 random option
function getComputersChoice() {
  let computerOptions = ['Rock', 'Paper', 'Scissors'];
  computersChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computersChoice;
}

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
    return playerWin;
  } else {
    let computerWin = 'Computer WIN';
    roundResultEl.textContent = 'You lost. Computer win';
    roundResultEl.style.color = 'red';
    computerScore++;
    computerResult.textContent = computerScore.toString();
    return computerWin;
  }
}

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => {
  playerText.textContent = 'Rock';
  playOneRound('Rock');
});

paperBtn.addEventListener('click', () => {
  playerText.textContent = 'Paper';
  playOneRound('Paper');
});

scissorsBtn.addEventListener('click', () => {
  playerText.textContent = 'Scissors';
  playOneRound('Scissors');
});
