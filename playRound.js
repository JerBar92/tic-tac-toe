import { gameBoard } from "./gameBoard.js";

export const playRound = (function () {
  let players = [];
  let activePlayer;
  let gameOn;

  //display the name of current player
  const printNewRound = () => {
    const displayActivePlayer = document.querySelector("#playerTurn");
    displayActivePlayer.textContent = "";
    displayActivePlayer.textContent = `${activePlayer.name}'s turn.`;
  };

  //initialize game
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

  //display the result of the game
  const displayResult = () => {
    const endMessage = document.querySelector("#endMessage");
    if (gameBoard.checkVictory(gameBoard.getBoard())) {
      endMessage.textContent = `${activePlayer.name} win !`;
    } else if (gameBoard.checkTie(gameBoard.getBoard())) {
      endMessage.textContent = "It's a tie";
    }
  };

  //game controller
  const handleClick = (cell) => {
    let index = parseInt(cell.id);
    if (gameBoard.getBoard()[index] !== "") return;
    gameBoard.update(index, activePlayer.mark);
    if (gameBoard.checkVictory(gameBoard.getBoard())) {
      gameOn = false;
    } else if (gameBoard.checkTie(gameBoard.getBoard())) {
      gameOn = false;
    }
    if (gameOn === false) {
      displayResult();
    } else {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
      printNewRound();
    }
  };
  return { start, handleClick };
})();
