import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import View from './GameView';
import subscription from "./EventEmitter.js";
const Controller=()=>{

    const gameBoard1= new GameBoard();
    const gameBoard2= new GameBoard();
    const player2 = new Player('Computer');
    const player1 = new Player('You');
    player1.gameBoard=gameBoard1;
    player2.gameBoard=gameBoard2;
    
    player1.deployFleet();
    player2.deployFleet();
    const view=View();

    let currentPlayer= player1;
    let opponent= player2;
    const switchTurn=()=>{
        if(currentPlayer.id===player1.id) {
            currentPlayer=player2;
            opponent=player1;
        }else{
            currentPlayer=player1;
            opponent=player2;
            }
    }
    const init=()=>{
        view.display(gameBoard2,gameBoard1);
    }
    const allocateFire=(location)=>{
      opponent.gameBoard.receiveAttack(location);
      view.display(currentPlayer.gameBoard,opponent.gameBoard);
     switchTurn(); 
     if(currentPlayer.id===player2.id){
        const row= Math.floor(Math.random()*10)
        const loc = `${(row>=1)?row:''}${Math.floor(Math.random()*10)}`;
        console.log('location',loc)
        subscription.subscribe('fire',loc);
     }
    
    }
    subscription.publish('fire',allocateFire)

   return {init}
}

export default Controller;




// console.log(player1);
//valid move from player --rerender --evaluate --record
//let computer generate move --rerender --evaluate --record
//repeat