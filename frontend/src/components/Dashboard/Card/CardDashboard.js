import React from "react";

const CardDashboard = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default CardDashboard;
