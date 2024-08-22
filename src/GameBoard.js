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
const canAccomodateShip=(location,ship)=>{
if(ship.alignment==="horizontal"){
     return parseInt(location)+ship.length-1<100 && parseInt(location)+ship.length-1>0 && parseInt((parseInt(location)+ship.length)/10)===parseInt(parseInt(location)/10)
    }
if(ship.alignment==="vertical") return parseInt(location)+10*ship.length-1<100 && parseInt(location)+10*ship.length-1>0 && parseInt(location)+ship.length-1>0 && parseInt((parseInt(location)+ship.length)%10)===parseInt(parseInt(location)%10);    
}
const isOccupied=(location,ship)=>{
    let occupied= false;
    for( let i=0;i<ship.length;i++){ 
        if(ship.alignment==='horizontal') if(Object.keys(this.occupied).includes((parseInt(location)+i).toString()) ) occupied=true;
        if(ship.alignment==='vertical')   if(Object.keys(this.occupied).includes((parseInt(location)+10*i).toString())) occupied=true;     

    }
    return occupied;
}

const occupyLocation=(location,ship)=>{
    if(!isOccupied(location,ship)) {
        for(let i=0;i<ship.length;i++) {
            if(ship.alignment==='horizontal'){
                ship.location.push(`${parseInt(location)+i}`);
                this.occupied[`${parseInt(location)+i}`]=ship;
            }
            if(ship.alignment==='vertical'){
                ship.location.push(`${parseInt(location)+10*i}`);
                this.occupied[`${parseInt(location)+10*i}`]=ship;  
            }
        }
    }
}
 for(const ship of this.fleet){
    while(!ship.location.length){
        let location=`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
        (Math.floor(Math.random()*2)===1)? ship.alignment='horizontal': ship.alignment='vertical';
            if(canAccomodateShip(location,ship)) occupyLocation(location,ship)
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
  for(const ship of this.fleet){
     if(!ship.sunk) return false;
    }
  return true;
}

}
