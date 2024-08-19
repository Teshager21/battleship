import BattleShip from "./BattleShip";
it('should take a hit',()=>{
    const battleShip= new BattleShip();
    battleShip.hit();
    expect(battleShip.recieved_hit).toBe(1);
})

