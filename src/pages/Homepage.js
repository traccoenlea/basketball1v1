import React from "react";
import Start from "../components/Start";
import Header from "../components/Header";
import Player from "../components/Player";
import Basic from "../components/Basic";
import Extra from "../components/Extra";

const Homepage = () => {
  return (
    <div className="homepageContainer bgContainer">
      <div>
        <Header title="Choisis tes paramètres" />
      </div>
      <div>
        <div className="flex mtb20 jcb constraintsContainer">
          <Basic />
          <Extra />
        </div>
        <Player />
      </div>
      <div>
        <Start />
      </div>
    </div>
  );
};

export default Homepage;
