import React, {useState} from 'react';

import Board from './Board';
import './tic-tac-toe.css';

function TicTacToe() {
  const initialBoardStatus = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
  }

  const [boardStatus, setBoardStatus] = useState(initialBoardStatus);
  const [gameClickCounter, setGameClickCounter] = useState(0);

  const hanldeSquareClick = (key) => {
    const fillValue = gameClickCounter % 2 === 0 ? 'X' : 'O';
    let newBoardStates = Object.assign({}, boardStatus, {[key]: fillValue});

    setBoardStatus(newBoardStates);
    setGameClickCounter(gameClickCounter + 1)

  }
  
  
  return(
    <div className="flex-column align-items-center">
      <h2>TicTacToe</h2>
      <Board boardStatus={boardStatus} hanldeSquareClick={hanldeSquareClick} />
    </div>
  )
}

export default TicTacToe;