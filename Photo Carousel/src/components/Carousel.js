import React from "react";
import Arrow from "./Arrow.js";
import ImageSlide from "./ImageSlide.js";
import PhotoPreview from "./PhotoPreview.js";
import Button from "./Button.js";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import axios from "axios";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      fade: false,
      imgUrls: []
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.enterSlide = this.enterSlide.bind(this);
    this.changeFade = this.changeFade.bind(this);
    this.alertOne = this.alertOne.bind(this);
    this.alertTwo = this.alertTwo.bind(this);
  }

  componentDidMount() {
		var id = window.location.pathname.slice(9);
    axios
      .get(`/api/${id}`)
      .then(res => this.setState({ imgUrls: res.data[0].pictureUrls }));
  }

  previousSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      fade: true
    });
  }

  nextSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      fade: true
    });
  }

  enterSlide(i) {
    this.setState({
      currentImageIndex: i,
      fade: true,
      isOpen: false
    });
  }

  changeFade() {
    this.setState({
      fade: false
    });
  }

  alertOne() {
    this.props.alert1();
    this.changeFade();
  }

  alertTwo() {
    this.props.alert2();
    this.changeFade();
  }

  render() {
    const Link = styled.a`
      transform: translate(495px, -35px);
      background-clip: border-box;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      color: rgb(153, 153, 153);
      cursor: pointer;
      display: block;
      font-family: "Graphik Webfont", -apple-system, system-ui, Roboto,
        "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 14px;
      height: 19px;
      line-height: 19.6px;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: -4px;
      padding-bottom: 0px;
      padding-left: 20px;
      padding-right: 0px;
      padding-top: 0px;
      position: absolute;
      text-align: center;
      text-decoration-color: rgb(153, 153, 153);
      text-decoration-line: none;
      text-decoration-style: solid;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    `;

    return (
      <div>
        <Arrow direction="left" clickFunction={this.previousSlide} />
        <ImageSlide
          url={this.state.imgUrls[this.state.currentImageIndex]}
          fade={this.state.fade}
        />
        <Arrow direction="right" clickFunction={this.nextSlide} />
        <PhotoPreview
          urls={this.state.imgUrls}
          clickFunction={this.enterSlide}
          currIndex={this.state.currentImageIndex}
        />
        <Link onClick={() => this.setState({ isOpen: true })} id="zoom">
          &#128269;zoom
        </Link>
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.imgUrls[this.state.currentImageIndex]}
            onCloseRequest={() => this.setState({ isOpen: false, fade: false })}
            enableZoom={false}
          />
        )}
        <Button
          svg={this.props.svg}
          fill={this.props.fill}
          like={this.props.like}
          alert1={this.alertOne}
          alert2={this.alertTwo}
        />
      </div>
    );
  }
}
