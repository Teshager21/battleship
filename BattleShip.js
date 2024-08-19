class BattleShip{
    constructor(length){
        this.length=length;
        this.recieved_hit=0;
        this.sunk=false;
    }
hit(){
    this.recieved_hit++;
}
isSunk(){
    this.sunk= (this.recieved_hit===this.length);
}
}


export default BattleShip