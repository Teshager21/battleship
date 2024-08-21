import BattleShip from "../src/BattleShip";
it('should return a received_hit of one',()=>{
    const battleShip= new BattleShip(3);
    battleShip.hit();
    expect(battleShip.received_hit).toBe(1);
})

it('it should return sunk-true',()=>{
    const battleShip = new BattleShip(1);
    battleShip.hit();
    battleShip.isSunk();
    expect(battleShip.sunk).toBe(true);
})



