import React from "react";
import ImgApi from "./imgApi";
class SneakersCompo extends React.Component {
  state = {
    prices: [
      6576, 8211, 4075, 5799, 5238, 7909, 7887, 5060, 7635, 5013, 5085, 9779,
      4269, 4447, 9693, 4069, 6908, 8074, 9416, 5650,
    ],
  };
  render() {
    return (
      <div>
        <ImgApi para="Sneakers" price={this.state.prices} />
      </div>
    );
  }
}

export default SneakersCompo;
