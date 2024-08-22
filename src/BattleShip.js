class BattleShip{
    constructor(length){
        this.length=length;
        this.received_hit=0;
        this.alignment='horizontal';
        this.sunk=false; 
    }
location=[];
hit(){
    this.received_hit++;
    this.isSunk();
}
isSunk(){
    this.sunk= (this.received_hit===this.length);
}
}


export default BattleShip