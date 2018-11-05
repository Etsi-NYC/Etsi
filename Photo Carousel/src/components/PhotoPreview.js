import React from "react";
import styled from "styled-components";

const Img2 = styled.img`
  background-color: rgb(153, 153, 153);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(34, 34, 34);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: none;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-size: 14px;
  max-height: 30px;
  line-height: 19.6px;
  min-width: 30px;
  max-width: 30px;
`;

const PhotoDiv = styled.div`
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 35px;
  margin-top: 7px;
  text-align: center;
  width: 570px;
`;

const List = styled.ul`
  color: rgb(34, 34, 34);
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 30px;
  line-height: 19.6px;
  margin-right: auto;
  margin-left: auto;
  max-width: 570px;
  display: flex;
  justify-content: center;
  list-style: none;
`;

const Thumbnail = styled.li`
  background-color: rgb(153, 153, 153);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: pointer;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 30px;
  line-height: 19.6px;
  margin-bottom: 0px;
  margin-left: 6px;
  margin-right: 0px;
  margin-top: 0px;
  opacity: 0.6;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 30px;
	display: list-item;
	outline-color: rgb(59, 153, 252);
	outline-width: 5px;	
  opacity: ${props => (props.currIndex === props.index ? 1 : 0.6)};
  &:hover {
    opacity: 1;
  }
`;

const PhotoPreview = ({ urls, clickFunction, currIndex }) => {
	return (
    <PhotoDiv>
      <List>
        {urls.map((url, i) => {
          return (
            <Thumbnail
              key={i}
              index={i}
              currIndex={currIndex}
							onClick={() => clickFunction(i)}
							tabIndex="-1"
            >
              <ImageThumbnail url={url} />
            </Thumbnail>
          );
        })}
      </List>
    </PhotoDiv>
  );
};

const ImageThumbnail = ({ url }) => {
  return <Img2 src={url} height="30px"/>;
};

export default PhotoPreview;
