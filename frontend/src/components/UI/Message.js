import React from "react";

const Message = (props) => {
  return (
    <div
      className={`message--wrapper ${
        props.type === "error"
          ? "error"
          : "" || props.type === "success"
          ? "success"
          : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Message;
