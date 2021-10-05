import React from "react";
import axios from "axios";
class ImgApi extends React.Component {
  state = {
    imgData: [],
    priceData: this.props.price,
    parameter: this.props.para,
  };
  photos = (params) => {
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: { query: params, per_page: 20, orientation: "squarish" },
        headers: {
          Authorization:
            "Client-ID fa_gQrUS_Zzk1p5npNmx8jbmNUa0IAIC6DClaCDw3II",
        },
      })
      .then((response) => {
        this.setState({ imgData: response.data.results });
      });
  };
  componentDidMount() {
    this.photos(`${this.state.parameter}`);
  }
  render() {
    return (
      <div className="products">
        <h1>{this.state.parameter}</h1>
        {this.state.imgData.length !== 0 ? (
          this.state.imgData.map((data) => {
            let position = this.state.imgData.indexOf(data);
            let priceVal = this.state.priceData[position];
            return (
              <div className="cards">
                <img
                  key={data.id}
                  style={{ width: "240px", height: "240px" }}
                  src={`${data.urls.small}`}
                />
                <p className="price">{`₹ ${priceVal}`}</p>
                <button>Add to Cart</button>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ImgApi;
