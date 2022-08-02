import React from "react";
import "./board.css";

function Board(props) {
  return <div className="board">{props.children}</div>;
}

export default Board;
