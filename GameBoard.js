import BattleShip from "./BattleShip.js"

export default class GameBoard{
constructor(){
  this.fleet=[];
  this.occupied={};
  this.missed=[];
  this.hit=[];
}

generateShips(){
for(let i=1;i<=5;i++){
   this.fleet.push(new BattleShip(i));
}
}

placeShips(){
this.generateShips();
const canAccomodateShip=(location,ship,alignment)=>{
if(alignment==="horizontal") return parseInt(location)+ship.length-1<100 && parseInt(location)+ship.length-1>0;
if(alignment==="vertical") return parseInt(location)+10*ship.length-1<100 && parseInt(location)+10*ship.length-1>0;
}
const isOccupied=(location,ship,alignment)=>{
    let occupied= false;
    for( let i=0;i<ship.length;i++){ 
        if(alignment==='horizontal') if(Object.keys(this.occupied).includes((parseInt(location)+i).toString()) ) occupied=true;
        if(alignment==='vertical')   if(Object.keys(this.occupied).includes((parseInt(location)+10*i).toString())) occupied=true;     

    }
    return occupied;
}

const occupyLocation=(location,ship,alignment)=>{
    if(!isOccupied(location,ship,'horizontal')) {
        for(let i=0;i<ship.length;i++) {
            if(alignment==='horizontal'){
                ship.location.push(`${parseInt(location)+i}`);
                this.occupied[`${parseInt(location)+i}`]=ship;
            }
            if(alignment==='vertical'){
                ship.location.push(`${parseInt(location)+10*i}`);
                this.occupied[`${parseInt(location)+10*i}`]=ship;  
            }
        }
    }
}
 for(const ship of this.fleet){
    
     let alignment='';
    while(!ship.location.length){
        let location=`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
        (Math.floor(Math.random()*2)===1)? alignment='horizontal': alignment='vertical';
            if(canAccomodateShip(location,ship,alignment)) occupyLocation(location,ship,alignment)
        }   

    }
}

receiveAttack(location){
    if(this.hit.includes(location)||this.missed.includes(location)) return;
    if(this.occupied[location]) {
        this.occupied[location].hit();
        this.hit.push(location);
    }
    else this.missed.push(location);

}

isFleetSunk(){
  for(const ship of this.fleet) if(!ship.sunk) return false;
  return true;
}

}




const gameBoard= new GameBoard();
gameBoard.placeShips();


gameBoard.receiveAttack(Object.keys(gameBoard.occupied)[0])
// console.log(gameBoard.occupied)
// console.log('missed',gameBoard.missed)
// console.log('hit',gameBoard.hit);
// console.log('values',Object.values(gameBoard.occupied)[0].received_hit
// );