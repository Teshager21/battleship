import Board from './Board'

const View=(gameBoard)=>{
    const view= document.createElement('div');
    view.classList.add('container');
    
    const board1 = Board();
    const board2 = Board();

    board2.addEventListener('click',(e)=>handleFire(e));

    const handleFire=(e)=>{
        console.log(e.target);
        e.target.textContent= 'x'
    }
    
    view.append(board1,board2);

    const display=(playerBoard,opponentBoard)=>{
        const container= document.createElement('div');
        document.body.append(container);
        container.classList.add('container');
        container.append(view);
       displayBoard(playerBoard,true);  
       displayBoard(opponentBoard,false);
    }

    const displayBoard=(gameBoard,showFleet)=>{
        let board=board1;
        showFleet? board=board1:board=board2;
        if(showFleet){
        for(const ship of gameBoard.fleet){ //display ships
            ship.location.map((cellId)=>document.getElementById(cellId).classList.add('occupied'))
        }
         }
        const missedLocations= gameBoard.missed;  //display missed locations
        for(const cell of missedLocations){
            board.querySelector(`[id="${cell}"]`).classList.add('missed');
            board.querySelector(`[id="${cell}"]`).textContent='o';
        }
        const hitLocations= gameBoard.hit;  //display missed locations
        for(const cell of hitLocations){
            board.querySelector(`[id="${cell}"]`).textContent='X';
        }   
    }
    return {view,display};
}

export default View;
