const player1Road = document.querySelectorAll("#player1-race td");
const player2Road = document.querySelectorAll("#player2-race td");
const winText = document.querySelector("h1");
const winBox = document.querySelector(".winner");
const restartBtn = document.querySelector("button");

let isThereAWinner = false;

window.addEventListener("keydown", (e) => {
  if (isThereAWinner) {
    return;
  }
  if (e.key === "d" || e.key === "D") {
    moveCar(player1Road, "Player1");
  }
  if (e.key === "ArrowRight") {
    moveCar(player2Road, "Player2");
  }
});

restartBtn.addEventListener("click", () => {
  restartGame();
});

const moveCar = (road, player) => {
  for (let i = 0; i < road.length; i++) {
    if (road[i].classList.contains("active")) {
      road[i].classList.remove("active");
      road[i + 1].classList.add("active");
      if (i === road.length - 2) {
        winGame(player);
      }
      return;
    }
  }
};

const restartGame = () => {
  player1Road.forEach((element) => {
    element.classList.remove("active");
  });
  player2Road.forEach((element) => {
    element.classList.remove("active");
  });
  player1Road[0].classList.add("active");
  player2Road[0].classList.add("active");
  winBox.style.opacity = "0";
  isThereAWinner = false;
};

const winGame = (playerName) => {
  isThereAWinner = true;
  winText.textContent = `The Winner Is: ${playerName}`;
  winBox.style.opacity = "1";
};
