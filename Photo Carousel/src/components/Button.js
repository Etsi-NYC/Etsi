import React from "react";
import styled from "styled-components";

const FavButton = styled.button`
  transform: translate(520px, -600px);
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  height: 39px;
  width: 39px;
  position: relative;
  z-index: 4;
  text-align: center;
  display: flex;
  border: none;
`;

const Button = ({ svg, fill, like, alert1, alert2 }) => {
  return (
    <React.Fragment>
      <FavButton onClick={like ? alert2 : alert1}>
        <svg viewBox="0 0 24 24" height="24px" width="24px">
          <path d={svg} fill={fill} />
        </svg>
      </FavButton>
    </React.Fragment>
  );
};

export default Button;
