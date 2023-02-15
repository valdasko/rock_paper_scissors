'use strict';
console.log('script.js');

let player;
let computer;
let result;

// Computer chooses 1 random option
function getComputersChoice() {
  var computerOptions = ['rock', 'paper', 'scissors'];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
