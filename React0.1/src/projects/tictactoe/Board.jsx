import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Winner";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isxNext, setIsxNext] = useState(true);
  const navigate = useNavigate();
//   console.log(square);

  const handleClick = (i) => {
    if ( square[i] || calculateWinner(square)) return;
    const nextSquare = square.slice(); // make copy of all squares
    console.log(nextSquare)
    if (isxNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare); // updated squares set originally
    setIsxNext(!isxNext);
  };
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isxNext ? "X" : "O");
  }
  return (
    <>
        <div><button onClick={()=>navigate('/')}>Home</button></div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
