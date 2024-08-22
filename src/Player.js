export default class Player{
    gameBoard;
    constructor(name){
        this.id=name;

    }
    set gameBoard(gameBoard){
        this.gameBoard=gameBoard;
    }
    deployFleet(){
        this.gameBoard.placeShips();
    }
}