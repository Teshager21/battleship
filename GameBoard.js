import BattleShip from "./BattleShip.js"

export default class GameBoard{
constructor(){
  this.ships=[];
  this.occupied=[];
  this.missed=[];
  this.hit=[];
  this.generateShips();
}

generateShips(){
for(let i=1;i<=5;i++){
   this.ships.push(new BattleShip(i));
}
}

placeShips(){
 for(const ship of this.ships){
     let location=`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
     let occupied;
    while(!ship.location.length){
        if(Math.floor(Math.random()*2)===1){ //horizontal alignment 
        if(parseInt(location)+ship.length-1<100 && parseInt(location)+ship.length-1>0){
        for( let i=0;i<ship.length;i++){    
            if(this.occupied.includes((parseInt(location)+i).toString())) occupied=true;     
        }
            if(!occupied) for(let i=0;i<ship.length;i++) {ship.location.push(parseInt(location)+i);
                this.occupied.push(parseInt(location)+i)
            }
        }
        }else{   //vertical alignment
            if(parseInt(location)+10*ship.length-1<100 && parseInt(location)+10*ship.length-1>0){
                for( let i=0;i<ship.length;i++){     
                    if(this.occupied.includes((parseInt(location)+10*i).toString())) occupied=true;     
                }
                if(!occupied) for(let i=0;i<ship.length;i++){ 
                    ship.location.push(parseInt(location)+10*i);
                    this.occupied.push(parseInt(location)+10*i);
                }
    
            }
        }   

    }
 }
}

}

const gameBoard= new GameBoard();
gameBoard.placeShips();
console.log(gameBoard.ships)
console.log(gameBoard.occupied)