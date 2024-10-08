export const gameBoard = (function () {
  const cell0 = document.querySelector("#cell0");
  const cell1 = document.querySelector("#cell1");
  const cell2 = document.querySelector("#cell2");
  const cell3 = document.querySelector("#cell3");
  const cell4 = document.querySelector("#cell4");
  const cell5 = document.querySelector("#cell5");
  const cell6 = document.querySelector("#cell6");
  const cell7 = document.querySelector("#cell7");
  const cell8 = document.querySelector("#cell8");

  const board = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];

  const getBoard = () => board;

  const clearBoard = () => {
    for (const cell of board) {
      cell.textContent = "";
    }
  };

  return { getBoard, clearBoard };
})();
