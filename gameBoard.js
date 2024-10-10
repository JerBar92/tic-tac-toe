import { playRound } from "./playRound.js";

export const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const update = (index, value) => {
    let cell = document.getElementById(`${index}`);
    board[index] = value;
    cell.textContent = value;
  };

  return { getBoard, update };
})();
