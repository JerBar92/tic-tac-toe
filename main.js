import { gameBoard } from "./gameBoard.js";
import { playRound } from "./playRound.js";

const startButton = document.querySelector("#startButton");

startButton?.addEventListener("click", () => playRound.start());
