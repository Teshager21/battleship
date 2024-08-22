import Board from './Board'

const View=(gameBoard)=>{
    const view= document.createElement('div');
    view.classList.add('container');
    
    const board1 = Board();
    const board2=Board();
    
    view.append(board1,board2);

    const display=(gameBoard)=>{
        const container= document.createElement('div');
        document.body.append(container);
        container.classList.add('container');
        container.append(view);
        for(const ship of gameBoard.fleet){

            ship.location.map((cellId)=>{
                // console.log(cellId)
                document.getElementById(cellId).classList.add('occupied');
            })

        }
       
    }
    return {view,display};
}

export default View;
