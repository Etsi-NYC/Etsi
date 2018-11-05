import React from "react";
import Slider from "react-slick";

class Carousel2 extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
          {this.props.photos.map((photo, idx) => (
            <div key={idx}>
              <img className="wyatt" src={photo} />  
            </div>
          )
          )}
        </Slider>
    );
  }
}

export default Carousel2;