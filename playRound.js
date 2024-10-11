import { gameBoard } from "./gameBoard.js";
import { victory } from "./victory.js";

export const playRound = (function () {
  let players = [];
  let activePlayer;
  let gameOn;

  const printNewRound = () => {
    const displayActivePlayer = document.querySelector("#playerTurn");
    displayActivePlayer.textContent = "";
    displayActivePlayer.textContent = `${activePlayer.name}'s turn.`;
  };

  const getActivePlayer = () => activePlayer;

  const start = () => {
    players = [
      { name: document.querySelector("#player1").value, mark: "O" },
      { name: document.querySelector("#player2").value, mark: "X" },
    ];
    activePlayer = players[0];
    gameOn = true;

    printNewRound();

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => handleClick(cell));
    });
  };

  const handleClick = (cell) => {
    let index = parseInt(cell.id);
    if (gameBoard.getBoard()[index] !== "") return;
    gameBoard.update(index, activePlayer.mark);
    //victory.checkVictory();
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    printNewRound();
  };
  return { start, handleClick, getActivePlayer };
})();
