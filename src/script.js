'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const bar0 = document.querySelector('.bar--0');
const bar1 = document.querySelector('.bar--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const btnWhite = document.querySelector('.btn--white');
const btnBlack = document.querySelector('.btn--black');
const theme = document.querySelector('#theme-link');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let darkTheme = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  bar0.classList.toggle('player--active');
  bar1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');

    if (darkTheme) {
      diceEl.src = `dice-${dice}.png`;
    } else {
      diceEl.src = `light-${dice}.png`;
    }

    // 3. Check for rolled 1: if true,
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Add progress bars
    document.getElementById('progress-bar--0').style.height = `${
      100 - scores[0]
    }%`;
    document.getElementById('progress-bar--1').style.height = `${
      100 - scores[1]
    }%`;
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById('progress-bar--0').style.height = `0%`;
      document.getElementById('progress-bar--1').style.height = `0%`;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.getElementById('progress-bar--0').style.height = `100%`;
  document.getElementById('progress-bar--1').style.height = `100%`;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
});

// Change Theme to Black or White

btnWhite.addEventListener('click', function () {
  // Select the href attribute
  theme.setAttribute('href', 'light-theme.css');
  // Hide the dice when the switch happens
  diceEl.classList.add('hidden');
  // Set the darkTheme to false so we can display the dark dices
  darkTheme = false;
});

btnBlack.addEventListener('click', function () {
  // Select the href attribute
  theme.setAttribute('href', 'dark-theme.css');
  // Hide the dice when the switch happens
  diceEl.classList.add('hidden');
  // Set the darkTheme to false so we can display the dark dices
  darkTheme = true;
});
