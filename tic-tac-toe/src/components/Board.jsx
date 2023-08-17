import { useEffect, useState } from "react";
import Squares from "./Squares";
import checkWin from "../checkWin";
import Reset from "./Reset";

const Board = () => {
  //   const [value, setValue] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [end, setEnd] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = (i) => {
    setEnd(i);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  useEffect(() => {
    const check = new checkWin(squares);
    if (check.checkWin()) {
      setWinner(xIsNext ? "Player 2" : "Player 1");
      console.log(`Winner: ${winner}`);
      setEnd(true);
      if (check.checkRow() || check.checkColumn()) {
        setMessage(`Straight, obvious lines. Shouldv've seen it coming`);
        console.log("Straight");
      } else {
        setMessage(`Always gotta watch out for those diagonals`);
        console.log("Diag");
      }
    } else if (check.checkTie()) {
      setMessage("IT'S A TIE!!!");
      setEnd(true);
    }
  }, [squares, xIsNext, winner]);

  return (
    <div className="relative">
      <div className="game-title">
        <h3> Tic Tac Toe</h3>
        <h4>Player 1: X; Player 2: O</h4>
        <h4>Next Player: {xIsNext? 'Player 1': 'Player 2'}</h4>
      </div>
      <div className="board-row">
        <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      {end ? (
        <div className="absolute">
          <Reset
            winner={winner}
            message={message}
            onResetClick={() => handleReset(false)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Board;
