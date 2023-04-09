import React from 'react';
import Square from "./Square";
import {useState} from "react";


const Board = () => {
    const handleClick = (i) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares);
            setX(!X);
        } else {
            alert("Can't do that")
        }

    }

    function CalculateWinner(square) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c])
            {
                return square[a];
            }
        }

    return null;
    };

    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);
    const winner = CalculateWinner(square);
    let status;
    if(winner){
        status='Winner is :'+winner;
    }else{
        status='Player turn :' + (X?"X":"O")
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)}/>
        )
    }
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <h1>{status}</h1>
        </div>
    )
};

export default Board;