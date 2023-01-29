const letterToGuess = document.querySelector(".letter-to-guess");
const rightOrNot = document.querySelector(".nope-right");
const playAgainWindow = document.querySelector(".play-again");
const guesses = document.querySelector(".guesses");
const button = document.querySelector("button");

let charToFind = "";
let winFlag = false;
let alreadyGuessedArr = [];
const characters = "abcdefghijklmnopqrstuvwxyz";

const winGame = () => {
  rightOrNot.textContent = "Right Letter";
  rightOrNot.classList.remove("nope");
  rightOrNot.classList.add("right");
  playAgainWindow.style.display = "flex";
  letterToGuess.textContent = charToFind;
  letterToGuess.classList.add("guessed-right-letter");
  letterToGuess.textContent = charToFind;
  winFlag = true;
};

const resetGame = () => {
  charToFind = getRandomChar();
  rightOrNot.classList.remove("nope");
  rightOrNot.classList.remove("right");
  playAgainWindow.style.display = "none";
  letterToGuess.classList.remove("guessed-right-letter");
  rightOrNot.textContent = "Guess a Key";
  letterToGuess.textContent = "?";
  guesses.textContent = "";
  winFlag = false;
};

const wrongGuess = (key) => {
  const letters = guesses.textContent;
  rightOrNot.classList.remove("right");
  rightOrNot.classList.add("nope");
  if (alreadyGuessedArr.includes(key)) {
    rightOrNot.textContent = `Nope, Already guessed '${key}'`;
    return;
  }
  rightOrNot.textContent = "Nope, Wrong letter";
  alreadyGuessedArr.push(key);
  if (letters === "") {
    guesses.textContent = `${key}`;
    return;
  }
  guesses.textContent = `${letters}, ${key}`;
};
const isInputWeird = (char) => {};

const getRandomChar = () => {
  const charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
};

const main = () => {
  charToFind = getRandomChar();
};

window.addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase();
  if (winFlag) {
    return;
  }
  if (key === charToFind) {
    winGame();
  } else if (characters.includes(key)) {
    wrongGuess(key);
  }
});

button.addEventListener("click", () => {
  resetGame();
});

window.onload = () => {
  main();
};
