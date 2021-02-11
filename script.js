'use strict';

// "let" instead of "const" in order to reassign secret number in the again click handler event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
// variable for high score to keep track when resetting game with 'again' click
let highscore = 0;

// line below displays secret number
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Game logic for guess my number game!!
  // if no number prints no number
  // too high of a number
  // too low of a number
  // if equal to number

  // when there is no input logic
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️  No number!';
  }
  // when player wins the game logic
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // background color turns green win player wins game
    document.querySelector('body').style.backgroundColor = '#60b347';
    // number width changed
    document.querySelector('.number').style.width = '30rem';

    //when the game finishes we check if the score is greater than highscore
    if (score > highscore) {
      // highscore variable so we can keep track of it
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong logic using ternary operator for too low or too high
  // in order to keep code dry
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
    // when your score reaches 0
    else {
      document.querySelector('.message').textContent = 'you lost the game 😔 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When guess is too high logic
/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

when guess is too low logic

  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

// anonymous handler function (function without name)
// code below resets game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
