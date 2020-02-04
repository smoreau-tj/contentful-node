import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc(50% - 12px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const CtaWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h2`
  font-family: Basetica;
  font-size: 24px;
  color: #4d4d4d;
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
  margin: 24px 0 8px;
`;
const Subtitle = styled.span`
  display: block;
  font-family: Basetica-Regular;
  font-size: 16px;
  color: #808080;
  text-align: center;
  line-height: 16px;
  margin: 0 0 16px;
`;

const Cta = styled.a`
  padding: 16px 64px;
  background-color: #fff;
  font-size: 14px;
  letter-spacing: 0;
  margin-top: 0;
  line-height: 19px;
  width: auto;
  min-width: 220px;
  margin-right: 20px;
  color: #4d4d4d;
  line-height: 10px;
  font-size: 12px;
  letter-spacing: 0.1em;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 1rem;
  font-family: Basetica Bold, sans-serif;
  background: #ffffff;
  border: 2px solid #4d4d4d;
  border-radius: 2px;
`;

export default function Side({ title, subtitle, ctaText, ctaUrl, image }) {
  return (
    <Container>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
      <CtaWrapper>
        <Cta src={ctaUrl}>{ctaText}</Cta>
      </CtaWrapper>
    </Container>
  );
}
