import React from "react";
import Settings from "./Settings";

const Header = ({ title }) => {
  return (
    <div className="headerContainer flex">
      <h1>{title}</h1>
      <Settings />
    </div>
  );
};

export default Header;
