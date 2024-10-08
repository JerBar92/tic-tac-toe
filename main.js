import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

const start = document.querySelector("#startButton");
let playerOneName = document.querySelector("#player1").value;
let playerTwoName = document.querySelector("#player2").value;

const playRound = () => {
  for (const cell of gameBoard.getBoard()) {
    cell?.addEventListener("click", () => {
      player.getActivePlayer();
      player.printNewRound();
      cell.textContent = player.getActivePlayer().marker;
      player.switchPlayerTurn();
      player.printNewRound();
    });
  }
};

start?.addEventListener("click", () => {
  gameBoard.clearBoard();
  player.printNewRound();
  playRound();
});
