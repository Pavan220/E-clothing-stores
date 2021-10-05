import React, { Component } from "react";
import ImgApi from "./imgApi";
class HatCompo extends Component {
  state = {
    prices: [
      420, 386, 322, 423, 461, 310, 380, 459, 477, 388, 336, 366, 450, 374, 115,
      107, 246, 372, 130, 343,
    ],
  };
  render() {
    return (
      <div>
        <ImgApi para="Hats" price={this.state.prices} />
      </div>
    );
  }
}

export default HatCompo;
