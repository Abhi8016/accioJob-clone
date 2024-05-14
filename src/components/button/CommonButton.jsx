import React from "react";
import "./styles.scss";
const CommonButton = ({ text, width, height }) => {
  return (
    <>
      <button className="pushable" style={{ width: `${width}` }}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span
          className="front"
          style={{ paddingTop: `${height}`, paddingBottom: `${height}`, }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default CommonButton;
