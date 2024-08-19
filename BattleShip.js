class BattleShip{
    constructor(){
        this.length=0;
        this.recieved_hit=0;
        this.isSunk=false;
    }
hit(){
    this.recieved_hit++;
}
}


export default BattleShip