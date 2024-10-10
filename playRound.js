import { gameBoard } from "./gameBoard.js";

export const playRound = (function () {
  let players = [];
  let activePlayer;
  let gameOn;

  const printNewRound = () => {
    const displayActivePlayer = document.querySelector("#playerTurn");
    displayActivePlayer.textContent = "";
    displayActivePlayer.textContent = `${activePlayer.name}'s turn.`;
  };

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
    console.log(cell);
    let index = parseInt(cell.id);
    gameBoard.update(index, activePlayer.mark);
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    printNewRound();
  };
  return { start, handleClick };
})();
