import GameBoard from "./GameBoard.js";
import Player from "./Player.js";

const gameBoard1= new GameBoard();
const gameBoard2= new GameBoard();
const player2 = new Player(gameBoard2);
const player1 = new Player(gameBoard1);

player1.deployFleet();
player2.deployFleet();



console.log(player1);
//valid move from player --rerender --evaluate --record
//let computer generate move --rerender --evaluate --record
//repeat