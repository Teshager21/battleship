import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import View from './GameView';
import subscription from "./EventEmitter.js";
const Controller=()=>{

    const gameBoard1= new GameBoard();
    const gameBoard2= new GameBoard();
    const player2 = new Player(gameBoard2);
    const player1 = new Player(gameBoard1);
    
    player1.deployFleet();
    player2.deployFleet();
    const view=View();

    let currentPlayer= player1;
    let opponent= player2;
    const switchTurn=()=>{
        if(currentPlayer===player1) {
            currentPlayer=player2;
            opponent=player1;
        }else{
            currentPlayer=player1;
            opponent=player2;
            }
    }
    const init=()=>{
        currentPlayer.gameBoard.receiveAttack('20');
        currentPlayer.gameBoard.receiveAttack('22');
        console.log(gameBoard1.fleet);
        view.display(gameBoard1,gameBoard2);
    }
    const allocateFire=(location)=>{
      opponent.gameBoard.receiveAttack(location);
      view.display(gameBoard1,gameBoard2);
      switchTurn();
    }
    subscription.publish('fire',allocateFire)

   return {init}
}

export default Controller;




// console.log(player1);
//valid move from player --rerender --evaluate --record
//let computer generate move --rerender --evaluate --record
//repeat