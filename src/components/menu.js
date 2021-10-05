import React, { Component } from "react";
class Menu extends Component {
  render() {
    return (
      <div className="menu block">
        <div className="blocker">
          <div
            style={{
              background: `url(${this.props.img})`,
              backgroundSize: "cover",
            }}
            className="image block"
            onClick={this.onMenuClick}
          >
            <div className="name block">
              <p>{this.props.infos}</p>
              <p>Shop</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
