'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number...';
document.querySelector('.label-highscore').textContent = 'High score goes here';
⛔️
🎉
📈
📉
💥
😀
*/
const message = document.querySelector('.message');
const HighScore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const Score = document.querySelector('.score');
const number = document.querySelector('.number');
const guessednumber = document.querySelector('.guess');

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessednumber.value);

  if (!guess) {
    message.textContent = '⛔️ No Number Input';
  } else if (guess === secretnumber) {
    message.textContent = '🎉 Correct Number';
    number.textContent = secretnumber;
    document.querySelector('body').style.background = 'green';

    if (score > highscore) {
      highscore = score;
      HighScore.textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 0) {
      message.textContent = '📈 Too high';
      score--;
      Score.textContent = score;
    } else {
      message.textContent = '😀 You lost the game';
    }
  } else if (guess < secretnumber) {
    if (score > 0) {
      message.textContent = '📈 Too low';
      score--;
      Score.textContent = score;
    } else {
      message.textContent = '😀 You lost the game';
    }
  }
});

again.addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.background = '#222';
  message.textContent = 'Start guessing...';
  Score.textContent = score;
  guessednumber.value = '';
  number.textContent = '?';
});
