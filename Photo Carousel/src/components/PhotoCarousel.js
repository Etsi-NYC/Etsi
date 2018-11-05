import React from "react";
import Carousel from "./Carousel.js";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

var toastId1;
var toastId2;

const transition = cssTransition({
  enter: "slideInUp",
  exit: "fadeOut",
  duration: [200, 400]
});

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false
    };
    this.alert1 = this.alert1.bind(this);
    this.alert2 = this.alert2.bind(this);
  }

  alert1() {
    toast.dismiss(toastId2);
    this.setState({
      like: !this.state.like
    });
    setTimeout(() => {
      toastId1 = toast(() => <div> &#10003; Favorited!</div>, {
        position: toast.POSITION.BOTTOM_CENTER,
        closeButton: false,
        autoClose: 4000
      });
    }, 450);
  }

  alert2() {
    toast.dismiss(toastId1);
    this.setState({
      like: !this.state.like
    });
    setTimeout(() => {
      toastId2 = toast(() => <div>Removed from favorites</div>, {
        position: toast.POSITION.BOTTOM_CENTER,
        closeButton: false,
        autoClose: 4000
      });
    }, 450);
  }

  render() {
    var svg;
    var fill;

    if (this.state.like) {
      fill = "rgb(193, 60, 39)";
      svg =
        "M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z";
    } else {
      fill = "black";
      svg =
        "M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z";
    }

    return (
      <div>
        <Carousel
          svg={svg}
          fill={fill}
          like={this.state.like}
          alert1={this.alert1}
          alert2={this.alert2}
        />
        <ToastContainer
          toastClassName="toast"
          className="toastCon"
          hideProgressBar
          closeOnClick={false}
          transition={transition}
        />
      </div>
    );
  }
}



