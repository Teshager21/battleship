import Board from './Board'

const View=()=>{
    const view= document.createElement('div');
    view.classList.add('container');
    
    const board1 = Board();
    const board2=Board();
    
    view.append(board1,board2);

    const display=()=>{
        const container= document.createElement('div');
        document.body.append(container);
        container.classList.add('container');
        container.append(view);
    }
    return {view,display};
}

export default View;
