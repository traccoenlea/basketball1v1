import React from "react";

const Player = () => {
  return (
    <div className="playerContainer bgBlur flex jcb">
      <div className="leftSideContainer flexc jce">
        <h2>Player 1</h2>
        <div className="flex">
          <h2>Name :</h2>
          <span className="playerName">Léa</span>
        </div>
      </div>
      <div className="flexc jcc">
        <div className="pointsContainer flexc jcc">
          <div>100</div>
          <div>pts</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
