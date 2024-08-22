
const Board=()=>{
    const board = document.createElement('div');
    board.classList.add('board');
    for(let i=0;i<100;i++){
        let cell= document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id',`${(i/10>=1)?Math.floor(i/10):''}${i%10}`)
        board.append(cell);
    }

    return  board;
}


export default Board;
