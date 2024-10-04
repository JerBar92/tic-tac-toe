const gameBoard = (function () {
  //Set the board and update after each player turn
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push("");
    }
  }

  const getBoard = () => board;

  const addMarker = (row, column) => {
    if (board[row][column] === "") {
      board[row][column] = gameController.getActivePlayer().marker;
    }
  };

  const printBoard = () => console.log(board);
  return { getBoard, addMarker, printBoard };
})();

const gameController = (function (
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const players = [
    {
      name: playerOneName,
      marker: "O",
    },
    {
      name: playerTwoName,
      marker: "X",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    gameBoard.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (row, column) => {
    gameBoard.addMarker(row, column);
    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return { playRound, getActivePlayer };
})();
