import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import View from './GameView';
const Controller=()=>{

    const gameBoard1= new GameBoard();
    const gameBoard2= new GameBoard();
    const player2 = new Player(gameBoard2);
    const player1 = new Player(gameBoard1);
    
    player1.deployFleet();
    player2.deployFleet();
    
    const init=()=>{
        const view=View();
        view.display(gameBoard1);
        console.log(gameBoard1.fleet);
    }
   return {init}
}

export default Controller;




// console.log(player1);
//valid move from player --rerender --evaluate --record
//let computer generate move --rerender --evaluate --record
//repeat