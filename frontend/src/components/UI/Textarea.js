import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      className={props.className}
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      maxLength={props.maxLength}
    >
      {props.children}
    </textarea>
  );
};

export default Textarea;
