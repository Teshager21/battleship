import Board from './Board'
import subscription from './EventEmitter';

const View=(gameBoard)=>{
    const view= document.createElement('div');
    view.classList.add('container');
    const container= document.createElement('div');
    document.body.append(container);
    container.classList.add('container');
    container.append(view);
    
    const board1 = Board();
    const board2 = Board();

    board2.addEventListener('click',(e)=>handleFire(e));

    const handleFire=(e)=>{
        subscription.subscribe('fire',e.target.getAttribute('id'));
    }
    
    view.append(board1,board2);
   
    const display=(playerBoard,opponentBoard)=>{
      clearBoard(board1);
      clearBoard(board2);
      displayBoard(playerBoard,board2);  
      displayBoard(opponentBoard,board1);
    }

    const clearBoard=(board)=>{
        const cells=board.children;
        for(let cell of cells){
            cell.textContent='';
            if(cell.classList.contains('missed')) cell.classList.remove('missed');
            if(cell.classList.contains('occupied')) cell.classList.remove('occupied');
            if(cell.classList.contains('hit')) cell.classList.remove('hit');
        }
    }

    const displayBoard=(gameBoard,board)=>{
        if(board===board1){
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
