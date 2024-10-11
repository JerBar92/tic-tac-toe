import { gameBoard } from "./gameBoard.js";
import { playRound } from "./playRound.js";

export const victory = (function () {
  const board = gameBoard.getBoard();
  const victoryCases = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  const line =
    (board[0] === board[1] && board[1] === board[2]) ||
    (board[3] === board[4] && board[4] === board[5]) ||
    (board[6] === board[7] && board[7] === board[8]);

  const column =
    (board[0] === board[3] && board[3] === board[6]) ||
    (board[1] === board[4] && board[4] === board[7]) ||
    (board[2] === board[5] && board[5] === board[8]);

  const diagonal =
    (board[0] === board[4] && board[4] === board[8]) ||
    (board[2] === board[4] && board[4] === board[6]);

  const checkVictory = () => {
    console.log(line);
    console.log(column);
    console.log(diagonal);
  };

  return { checkVictory };
})();
