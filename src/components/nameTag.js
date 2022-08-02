import React, { Fragment } from "react";

function nameTag(props) {
  return (
    <>
      <h3 className="name">{props.name}</h3>
      {props.name === "Ahmed Taha" && <h3 className="name">VIP</h3>}
    </>
  );
}

export default nameTag;
