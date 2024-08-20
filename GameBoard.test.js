import GameBoard from "./GameBoard";

it('should return a hit of 1',()=>{
    const gameBoard= new GameBoard();
    gameBoard.placeShips();
    const occupiedLocation= Object.keys(gameBoard.occupied)[0];
    gameBoard.receiveAttack(occupiedLocation);
    const hit_ship=Object.values(gameBoard.occupied)[0];
    expect(hit_ship.received_hit).toBe(1);
    
})

it('should return true for fleetSunk',()=>{
    const gameBoard= new GameBoard();
    gameBoard.placeShips();
    const occupiedLocation= Object.keys(gameBoard.occupied);
    for(const location in  occupiedLocation){
        gameBoard.receiveAttack(location);
    }
    expect(gameBoard.fleetSunk()).toBe(true);
})

