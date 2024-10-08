export const player = (function () {
  const players = [
    {
      name: "player1",
      marker: "O",
    },
    {
      name: "player2",
      marker: "X",
    },
  ];

  //players[0].name = document.querySelector("#player1").value;
  //players[1].name = document.querySelector("#player2").value;

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    const displayActivePlayer = document.querySelector("#playerTurn");
    displayActivePlayer.textContent = "";
    displayActivePlayer.textContent = `${getActivePlayer().name}'s turn.`;
  };

  return { switchPlayerTurn, getActivePlayer, printNewRound };
})();
