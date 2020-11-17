import React from "react";

import { AiFillPlusCircle as Plus } from "react-icons/ai";
import { AiFillMinusCircle as Minus } from "react-icons/ai";

export default function Counter(props) {
  return (
    <div className="count-container">
      <span className={`count ${props.count > 0 ? "count--v2" : null}`}>
        {props.count === 0 ? "zero" : props.count}
      </span>
      <div
        onClick={props.add}
        style={{
          background: "#757575",
          paddingTop: "5px",
          width: "36px",
          paddingLeft: "8px",
          marginRight: "8px",
          borderRadius: "3px",
          cursor: "pointer",
          position: "absolute",
          left: "450px",
          // marginLeft: "15px",
        }}
      >
        <Plus color="white" size="26px"></Plus>
      </div>
      <div
        className={`${props.count === 0 ? "disable" : ""}`}
        onClick={props.minus}
        style={{
          background: "#4DD0E1",
          paddingTop: "5px",
          width: "36px",
          paddingLeft: "8px",
          borderRadius: "3px",
          cursor: "pointer",
          position: "absolute",
          left: "500px",
        }}
      >
        <Minus color="white" size="26px"></Minus>
      </div>
    </div>
  );
}
