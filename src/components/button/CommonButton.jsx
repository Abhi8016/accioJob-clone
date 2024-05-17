import React from "react";
import "./styles.scss";
const CommonButton = ({
  text,
  btnColor,
  textColor,
  shawodColor,
  borderColor,
  paddingHV
}) => {
  return (
    <>
      <button className="pushable" style={{  }}>
        <span className="shadow"></span>
        <span className="edge" style={{ background: `${shawodColor}` }}></span>
        <span
          className="front"
          style={{
            padding: `${paddingHV}`,
            background: `${btnColor}`,
            color: `${textColor}`,
            border: `2px solid ${borderColor}`,
          }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default CommonButton;
