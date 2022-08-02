import React, { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/cell";
import Board from "./components/board";

function App() {
  //states
  const [cellNumbers, setCellNumbers] = useState(new Array(16).fill(0));

  const shuffleCells = () => {
    let cellsShuffled = [];

    while (cellsShuffled.length < 16) {
      var r = Math.floor(Math.random() * 16);
      if (cellsShuffled.indexOf(r) === -1) cellsShuffled.push(r);
    }

    setCellNumbers(cellsShuffled);
  };

  const moveCell = (index) => {
    let nwCells = cellNumbers.slice();
    let isSorted = true;

    //check if bottom cell is empty
    if (index + 4 < 16 && cellNumbers[index + 4] === 0) {
      nwCells[index + 4] = nwCells[index];
      nwCells[index] = 0;
    }
    //check if top cell is empty
    else if (index - 4 >= 0 && cellNumbers[index - 4] === 0) {
      nwCells[index - 4] = nwCells[index];
      nwCells[index] = 0;
    }
    //chech if right cell is empty
    else if (index + 1 < 16 && cellNumbers[index + 1] === 0) {
      nwCells[index + 1] = nwCells[index];
      nwCells[index] = 0;
    }
    //chech if left cell is empty
    else if (index - 1 >= 0 && cellNumbers[index - 1] === 0) {
      nwCells[index - 1] = nwCells[index];
      nwCells[index] = 0;
    }

    setCellNumbers(nwCells);

    // check if the grid is sorted
    for (let i = 1; i < 16; i++) {
      if (cellNumbers[i] < cellNumbers[i - 1]) isSorted = 0;
    }
    if (isSorted) {
      alert("Congratulations you successfully managed to ace the game");
    }
  };

  const cells = cellNumbers.map((number, idx) => (
    <Cell
      key={idx}
      cellNumber={number}
      cellIndex={idx}
      cellClassName={number === 0 ? "cell gap-cell" : "cell used-cell"}
      moveCell={moveCell}
    >
      {" "}
    </Cell>
  ));

  useEffect(() => {
    shuffleCells();
  }, []);

  return (
    <div className="game">
      <h1 className="title">15 puzzle game</h1>
      <Board>{cells}</Board>
      <div onClick={shuffleCells} className="new-button">
        Start new game!
      </div>
    </div>
  );
}

export default App;
