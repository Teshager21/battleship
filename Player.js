export default class Player{
    constructor(gameBoard){
        this.gameBoard=gameBoard;

    }
    deployFleet(){
        this.gameBoard.placeShips();
    }
}