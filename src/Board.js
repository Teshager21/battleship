
const Board=()=>{
    const board = document.createElement('div');
    board.classList.add('board');
    document.body.append(board);

    for(let i=0;i<100;i++){
        let cell= document.createElement('div');
        cell.classList.add('cell');
        board.append(cell);
    }

    return  board;
}


export default Board;
