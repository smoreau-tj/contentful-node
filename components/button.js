import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  border: 1px solid $brandGreen;
`;

const Button = styled.span`
  padding: 20px;
  width: auto;
  min-width: 220px;
  color: #fff;
  line-height: 10px;
  font-size: 12px;
  letter-spacing: 0.1em;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1rem;
  font-family: "Basetica Bold", sans-serif;

  @media screen and (max-width: 768px) {
    border: 1px solid #737373;
    color: #737373;
    background-color: #fff;
  }
`;

export default function CtaButton({ href, text }) {
  return (
    <Wrapper href={href}>
      <Button
        mobileborder={mobileborderColor || "transparent"}
        mobileColor={mobileColor || "#737373"}
        mobileFont={mobileFont || "Basetica"}
        mobileTextAlignment={mobileTextAlignment || "center"}
        desktopBorderColor={desktopBorderColor || "transparent"}
        desktopColor={desktopColor || "#737373"}
      >
        {text}
      </Button>
    </Wrapper>
  );
}
