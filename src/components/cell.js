import React from "react";
import "./cell.css";

function Cell(props) {
  const handleMove = () => {
    props.moveCell(props.cellIndex);
  };

  return (
    <div onClick={handleMove} className={props.cellClassName}>
      {props.cellNumber !== 0 ? props.cellNumber : ""}
    </div>
  );
}

export default Cell;
