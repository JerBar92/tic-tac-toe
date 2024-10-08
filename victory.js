import { gameBoard } from "./gameBoard.js";
import { player } from "./player.js";

export const victory = (function () {
  let gameOn = true;
  let victory = false;

  const cell0 = gameBoard.getBoard()[0].textContent;
  const cell1 = gameBoard.getBoard()[1].textContent;
  const cell2 = gameBoard.getBoard()[2].textContent;
  const cell3 = gameBoard.getBoard()[3].textContent;
  const cell4 = gameBoard.getBoard()[4].textContent;
  const cell5 = gameBoard.getBoard()[5].textContent;
  const cell6 = gameBoard.getBoard()[6].textContent;
  const cell7 = gameBoard.getBoard()[7].textContent;
  const cell8 = gameBoard.getBoard()[8].textContent;

  const board = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];
  gameOn = board.includes("");

  const checkGameOn = () => gameOn;

  if (
    (cell0 === cell1 && cell1 === cell2) ||
    (cell3 === cell4 && cell4 === cell5) ||
    (cell6 === cell7 && cell7 === cell8) ||
    (cell0 === cell3 && cell3 === cell6) ||
    (cell1 === cell4 && cell4 === cell7) ||
    (cell2 === cell5 && cell5 === cell8) ||
    (cell0 === cell4 && cell4 === cell8) ||
    (cell2 === cell4 && cell4 === cell6)
  ) {
    victory = true;
  }

  const checkVictory = () => victory;

  return { checkGameOn, checkVictory };
})();
