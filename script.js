// Number Guessing game
// script.js

// Use strict mode
'use strict';

// GENERATE SECRET NUMBER
// Generate random number between 1 and 20
// We use truncate to remove decimals
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// GENERATE SCORE POINTS
// Let as oppose to const because we will be decreasing the value
let score = 20;

// GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
    // When the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'That is correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the score is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff4c30';
    }
    // When the score is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff4c30';
    }
  }
});
