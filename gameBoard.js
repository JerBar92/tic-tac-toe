import { playRound } from "./playRound.js";

export const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");
  const playerTurn = document.querySelector("#playerTurn");

  let getBoard = () => board;

  const update = (index, value) => {
    let cell = document.getElementById(`${index}`);
    board[index] = value;
    cell.textContent = value;
  };

  const reset = () => {
    for (let index = 0; index < board.length; index++) {
      board[index] = "";
      let cell = document.getElementById(`${index}`);
      cell.textContent = board[index];
    }
    player1.value = "";
    player2.value = "";
    playerTurn.textContent = "";
  };

  return { getBoard, update, reset };
})();
