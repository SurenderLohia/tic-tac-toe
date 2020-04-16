import React from 'react';

import './tic-tac-toe.css';

function Square(props) {
  console.log('Square props', props);
  const {hanldeSquareClick, value, boardStatusKey} = props;
  return (
    <div className="grid-item square item-center" onClick={() => hanldeSquareClick(boardStatusKey)}>{value}</div>
  )
}



function Board(props) {
  const {boardStatus, hanldeSquareClick} = props;
  console.log('Board: props', props);
  return(
    <div className="board">
      {
        Object.keys(boardStatus).map((key) => {
          return (
            <Square 
              key={key}
              boardStatusKey={key}
              hanldeSquareClick={hanldeSquareClick}
              value={boardStatus[key]}
            >
            </Square>
          )
        })
      }
    </div>
  )
}

export default Board;