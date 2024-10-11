export const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");
  const playerTurn = document.querySelector("#playerTurn");
  const endMessage = document.querySelector("#endMessage");

  let getBoard = () => board;

  //link between the board array and the DOM
  const update = (index, value) => {
    let cell = document.getElementById(`${index}`);
    board[index] = value;
    cell.textContent = value;
  };

  // reset all elements
  const reset = () => {
    for (let index = 0; index < board.length; index++) {
      board[index] = "";
      let cell = document.getElementById(`${index}`);
      cell.textContent = board[index];
    }
    player1.value = "";
    player2.value = "";
    playerTurn.textContent = "";
    endMessage.textContent = "";
  };

  const checkVictory = (board) => {
    const winningCases = [
      [[0], [1], [2]],
      [[3], [4], [5]],
      [[6], [7], [8]],
      [[0], [3], [6]],
      [[1], [4], [7]],
      [[2], [5], [8]],
      [[0], [4], [8]],
      [[2], [4], [6]],
    ];
    for (let i = 0; i < winningCases.length; i++) {
      const [a, b, c] = winningCases[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
  };
  const checkTie = (board) => {
    return board.every((cell) => cell !== "");
  };

  return { getBoard, update, reset, checkVictory, checkTie };
})();
