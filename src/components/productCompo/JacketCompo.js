import React, { Component } from "react";
import ImgApi from "./imgApi";
class JacketCompo extends Component {
  state = {
    prices: [
      3630, 4813, 2259, 1815, 3996, 3968, 3287, 3576, 2372, 2177, 4365, 3383,
      2609, 1048, 1731, 2325, 2929, 2918, 1247, 4667,
    ],
  };
  render() {
    return (
      <div>
        <ImgApi para="Jackets" price={this.state.prices} />
      </div>
    );
  }
}

export default JacketCompo;
