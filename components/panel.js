import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc(calc(100% - 48px) / 3);

  @media screen and (min-width: 768px) {
  }

  box-sizing: content-box;
`;

const Title = styled.h3`
  font-family: ${props => props.mobileFont};
  font-size: 14px;
  color: ${props => props.mobileColor};
  text-align: ${props => props.textAlignment};

  @media screen and (min-width: 768px) {
    color: ${props => props.desktopColor};
    font-family: ${props => props.desktopFont};
  }
`;
const ImgWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

export default function Panel({ text, image, ...props }) {
  return (
    <Container>
      <ImgWrapper>
        <img src={image} alt="" />
      </ImgWrapper>
      <Title
        desktopColor={props.desktopColor}
        desktopFont={props.desktopColor}
        mobileColor={props.mobileColor}
        mobileFont={props.mobileFont}
        textAlignment={props.textAlignment}
      >
        {text}
      </Title>
    </Container>
  );
}
