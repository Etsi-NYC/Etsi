import React from "react";
import styled from "styled-components";
import axios from "axios";

var Line = styled.hr`
  width: 570px;
  margin: 0;
`;

var DescriptionDiv = styled.div`
  position: relative;
  width: 570px;
  height: auto;
  padding-bottom: 5px;
  transform: translate(0, -20px);
`;

var DescriptionHeader = styled.h2`
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 25px;
  line-height: 20.6px;
  margin-block-end: 0px;
  margin-block-start: 12px;
  text-align: left;
  width: 570px;
`;


var Divider = styled.a`
  color: black;
  text-decoration: underline;
  font-weight: bold;
	cursor: pointer;
	&:hover {
		color: rgb(89, 89, 89);
	}
	font-family: Arial;
`;
export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: ''
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState({ showText: !this.state.showText });
  }

  componentDidMount() {
		var id = window.location.pathname.slice(9);
    axios
      .get(`/api/${id}`)
      .then(res => this.setState({ text: res.data[0].description }));
  }

  render() {
		var TextBody = styled.div`
			color: rgb(34, 34, 34);
			display: block;
			font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
				"Segoe UI", Helvetica, Arial, sans-serif;
			font-size: 14px;
			white-space: pre-line;
			width: 570px;
			line-height: 24px;
			overflow-wrap: break-word;
			word-break: break-all;
			text-align: left;
			background-image: ${this.state.showText ? '' : '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.2)))'};
			-webkit-background-clip: ${this.state.showText ? '' : 'text'};
			-webkit-text-fill-color: ${this.state.showText ? '' : 'transparent'};
		`;



    if (!this.state.showText) {
      return (
        <DescriptionDiv>
          <Line />
          <DescriptionHeader>Description</DescriptionHeader>
          <TextBody>
            {this.state.text.slice(0, 350).replace(/ /g, "\u00a0")}
          </TextBody>
          <Divider onClick={this.toggleText}>+ More</Divider>
        </DescriptionDiv>
      );
    } else {
      return (
        <DescriptionDiv>
          <Line />
          <DescriptionHeader>Description</DescriptionHeader>
          <TextBody>{this.state.text.replace(/ /g, "\u00a0")}</TextBody>
          <Divider onClick={this.toggleText}>- Less</Divider>
        </DescriptionDiv>
      );
    }
  }
}