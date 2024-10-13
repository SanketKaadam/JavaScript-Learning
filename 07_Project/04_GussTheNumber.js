let randomNum = parseInt(Math.random() * 100 + 1);
//console.log(randomNum)

const userInput = document.querySelector('#guessField');
//console.log(inputValue)

const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please eneter valid Number`)
  } else if (guess < 1) {
    alert(`Please enter number greater than 1`)
  } else if (guess > 100) {
    alert(`Please enter number less than 100`)
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was : ${numGuess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess > randomNum) {
    displayMessage(`you guessed to high`);
  } else if (guess < randomNum){
    displayMessage(`you guessed to low`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesses.innerHTML += `${guess},  `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    resultParas.removeChild(p);
    playGame = true;
  });
}
