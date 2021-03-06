import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: ${props => props.mobileFont};
  font-size: 40px;
  color: ${props => props.mobileColor};
  letter-spacing: -0.5px;
  line-height: 46px;
  margin: 0 0 8px;
  text-shadow: 0 0 90px rgba(0, 0, 0, 0.5);
  text-align: ${props => props.mobileTextAlign};

  @media (min-width: 768px) {
    color: ${props => props.desktopColor};
    text-align: ${props => props.desktopTextAlign};
  }
`;

export default function TitleText(props) {
  console.log("these are my props", props);
  console.info("info", props.desktopColor);
  return (
    <Title
      desktopColor={props.desktopColor || "#737373"}
      desktopFont={props.desktopFont || "Basetica"}
      desktopTextAlign={props.desktopTextAlign || "left"}
      mobileColor={props.mobileColor || "#737373"}
      mobileTextAlign={props.mobileTextAlign || "center"}
      mobileFont={props.mobileFont || "Bastica"}
      dropShadow={props.dropShadow || false}
    >
      {props.title}
    </Title>
  );
}
