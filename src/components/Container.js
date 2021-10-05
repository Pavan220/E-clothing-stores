import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./menu";
class Container extends Component {
  state = {
    upper: [
      {
        info: "Hat",
        id: "A1",
        imgUrl:
          "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        info: "Jackets",
        id: "A2",
        imgUrl:
          "https://images.unsplash.com/photo-1556098539-3019e1bdf05e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGphY2tldHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        info: "Sneakers",
        id: "A3",
        imgUrl:
          "https://media.istockphoto.com/photos/object-patternsneakers-picture-id1304862992?b=1&k=20&m=1304862992&s=170667a&w=0&h=Emf1s0oY7xw7HjOCloT7XHLXlkdznJ9Tve-l9FZWBBA=",
      },
    ],
    lower: [
      {
        info: "Men",
        id: "B1",
        imgUrl:
          "https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        info: "Women",
        id: "B2",
        imgUrl:
          "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="upper">
          {this.state.upper.map((data) => {
            return (
              <NavLink
                key={data.id}
                style={{ textDecoration: "none" }}
                to={`/${data.info}`}
              >
                <Menu img={data.imgUrl} infos={data.info} />
              </NavLink>
            );
          })}
        </div>
        <div className="lower">
          {this.state.lower.map((data) => {
            return (
              <NavLink
                key={data.id}
                style={{ textDecoration: "none" }}
                to={`/${data.info}`}
              >
                <Menu img={data.imgUrl} infos={data.info} />
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Container;
