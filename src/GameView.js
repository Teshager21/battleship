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

    const handleFire=(e)=> subscription.subscribe('fire',e.target.getAttribute('id'));
    const gameOver=(id)=>{
        const dialog = document.querySelector("dialog");
        dialog.showModal();
        const closeButton = document.querySelector("dialog button");
        closeButton.addEventListener("click", () => {
          dialog.close();
        });
    }
    subscription.publish('fleetSunk',gameOver)
    
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
        if(board.querySelector('.ship')) {
            // const elements=Array.from(board.querySelectorAll('.ship'));
            board.querySelectorAll('.ship').forEach(ship=>ship.remove());
        }
    }

    const positionShip=(ship,board)=>{
        const shipComponent= document.createElement('div');
        shipComponent.classList.add('ship');
        board.append(shipComponent);
        shipComponent.style.height="20px";
        shipComponent.style.width='20px';
        const cells= ship.location.map((pos)=>parseInt(pos));
        const left=document.getElementById(`${cells[0]}`).offsetLeft;
        const width= document.getElementById(`${cells[0]}`).offsetWidth;
        const height= document.getElementById(`${cells[0]}`).offsetHeight;
        const top= document.getElementById(`${cells[0]}`).offsetTop;

        
        (ship.alignment==='horizontal')? shipComponent.style.left=`${left}px`:shipComponent.style.left=`${left}px`;
        (ship.alignment==='horizontal')? shipComponent.style.top=`${top}px`:shipComponent.style.top=`${top}px`;
        (ship.alignment==='horizontal')?shipComponent.style.width=`${width*ship.length}px`:shipComponent.style.width=`${width}px`;
        (ship.alignment==='horizontal')?shipComponent.style.height=`${height}px`:shipComponent.style.height=`${height*ship.length}px`
        console.log('width',width,'left',left,'afterLeft',shipComponent.offsetLeft);
        
    }

    const displayBoard=(gameBoard,board)=>{
        if(board===board1){
        for(const ship of gameBoard.fleet){ //display ships
            ship.location.map((cellId)=>board.querySelector(`[id='${cellId}']`).classList.add('occupied'));
           positionShip(ship,board);
        }
         }else for(const ship of gameBoard.fleet) if(ship.sunk) positionShip(ship,board);
         
        const missedLocations= gameBoard.missed;  //display missed locations
        for(const cell of missedLocations){
            board.querySelector(`[id="${cell}"]`).classList.add('missed');
            board.querySelector(`[id="${cell}"]`).textContent='o';
        }
        const hitLocations= gameBoard.hit;  //display missed locations
        for(const cell of hitLocations)   board.querySelector(`[id="${cell}"]`).textContent='X'; 
    }
    return {view,display};
}

export default View;
