import React from "react";

const Input = (props) => {
  return (
    <input
      id={props.id}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

export default Input;
