import React from "react";
import Input from "./Input";

const Basic = () => {
  return (
    <div className="basicContainer horizontalContainer">
      <h2>Nombre de points gagnants</h2>
      <div>
        <Input name="Start" data="40°" />
      </div>
    </div>
  );
};

export default Basic;
