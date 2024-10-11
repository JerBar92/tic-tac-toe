import { gameBoard } from "./gameBoard.js";
import { playRound } from "./playRound.js";

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");

startButton?.addEventListener("click", () => playRound.start());
resetButton?.addEventListener("click", () => gameBoard.reset());
