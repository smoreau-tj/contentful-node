import React from "react";
import styled from "styled-components";

const Subtitle = styled.span`
  font-family: ${props => props.mobileFont};
  font-size: 16px;
  color: ${props => props.mobileColor};
  text-align: ${props => props.mobileTextAlign};
  display: block;
  margin: 0 0 16px;
  @media (min-width: 768px) {
    color: ${props => props.desktopColor};
    text-align: ${props => props.desktopTextAlign};
    font-family: ${props => props.desktopFont};
  }
`;

export default function SubtitleText({
  desktopColor,
  desktopFont,
  desktopDropShadow,
  desktopTextAlign,
  mobileColor,
  mobileFont,
  mobileDropShadow,
  mobileTextAlign,
  text
}) {
  return (
    <Subtitle
      desktopColor={desktopColor || "#737373"}
      desktopDropShadow={desktopDropShadow || false}
      desktopFont={desktopFont || "Basetica"}
      desktopTextAlign={desktopTextAlign || "left"}
      mobileColor={mobileColor || "#737373"}
      mobileDropShadow={mobileDropShadow || false}
      mobileFont={mobileFont || "Basetica"}
      mobileTextAlign={mobileTextAlign || "center"}
    >
      {text}
    </Subtitle>
  );
}
