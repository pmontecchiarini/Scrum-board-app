import React from 'react';

const Board = () => {
    return(
        <React.Fragment>
            <div> 
                <div>TASK</div>
                <div>TO-DO</div>
                <div>IN PROCESS</div>
                <div>DONE</div>
            </div>
            <div>
                <buton>Close board</buton>
                <button>Delete Board</button>
            </div>
        </React.Fragment>
    )
};

export default Board;