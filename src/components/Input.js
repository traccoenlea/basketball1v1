import React from "react";

const Input = ({ name, data }) => {
  return (
    <div className="flex inputContainer jce">
      <div className="flexc jcc">{name}</div>
      <div className="flexc jcc">{data == "select" ? "▼" : data}</div>
    </div>
  );
};

export default Input;
