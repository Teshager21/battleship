import Board from './Board'

const View=(gameBoard)=>{
    const view= document.createElement('div');
    view.classList.add('container');
    
    const board1 = Board();
    const board2=Board();

    board2.addEventListener('click',(e)=>handleFire(e));

    const handleFire=(e)=>{
        console.log(e.target);
        e.target.textContent= 'x'
    }
    
    view.append(board1,board2);

    const display=(gameBoard)=>{
        const container= document.createElement('div');
        document.body.append(container);
        container.classList.add('container');
        container.append(view);
        for(const ship of gameBoard.fleet){ //display ships
            ship.location.map((cellId)=>document.getElementById(cellId).classList.add('occupied'))
        }
        // console.log('board',gameBoard.missed)
        const missedLocations= gameBoard.missed;  //display missed locations
        for(const cell of missedLocations){
            document.getElementById(cell).classList.add('missed');
        }
        const hitLocations= gameBoard.hit;  //display missed locations
        console.log(hitLocations)
        for(const cell of hitLocations){
            document.getElementById(cell).textContent='x'
        }
       
    }
    return {view,display};
}

export default View;
