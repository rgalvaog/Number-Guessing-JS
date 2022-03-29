// Number Guessing Game
// script.js
// Rafael Guerra
// March 28, 2022

// Use strict mode
"use strict";

// Global Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Global Functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setBodyColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const setTextWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const setNumberText = function (number) {
  document.querySelector(".number").textContent = number;
};

const setHighScore = function (highscoreNumber) {
  document.querySelector(".highscore").textContent = highscoreNumber;
};

const setScore = function (score_value) {
  document.querySelector(".score").textContent = score_value;
};

// Main Game Logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    displayMessage("That is correct");
    setBodyColor("#60b347");
    setTextWidth("30rem");
    setNumberText(secretNumber);
    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Guess is too high!" : "Guess is too low"
      );
      score--;
      setScore(score);
    } else {
      displayMessage("You lost the game :(");
      setScore(0);
      setBodyColor("#ff4c30");
    }
  }
});

// Again Button: Restore game conditions
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  setScore(score);
  setNumberText("?");
  setBodyColor("#222");
  setTextWidth("15rem");
  document.querySelector(".guess").value = "";
});
