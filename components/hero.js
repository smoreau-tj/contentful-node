import React from "react";
import styled from "styled-components";
import TitleText from "./titleText";

const Container = styled.section`
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    position: relative;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    min-width: 1280px;
    max-width: 1280px;
    text-align: left;
    padding: 0 75px;
    transform: translate(-50%, -50%);

    h1,
    span {
      padding: 0 75px;
    }
    a:first-of-type {
      margin-left: 75px;
    }
  }
`;
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Subtitle = styled.span`
  font-family: Basetica-Regular;
  font-size: 1rem;
  color: #4d4d4d;
  display: block;
  margin: 0 0 16px;

  @media (min-width: 768px) {
    color: #fff;
  }
`;
const Cta = styled.a`
  background-color: ${props => props.desktopBackgroundColor};
  border-radius: 2px;
  color: ${props => props.mobileColor};
  display: inline-block;
  font-family: ${props => props.desktopFont};
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 64px;
  border: 1px solid ${props => props.mobileBorderColor};
  width: auto;
  min-width: 220px;
  line-height: 19px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-align: center;
  margin: 1rem auto;

  @media (min-width: 768px) {
    background-color: ${props => props.backgroundColor};
    margin: 1rem;
    font-size: 14px;
    font-family: ${props => props.mobileFont};
    letter-spacing: 0;
    margin-top: 0;
    margin-right: 20px;
    text-align: center;
    margin-top: 1rem;
    font-family: Basetica Bold, sans-serif;
    border: 2px solid ${props => props.desktopBorderColor};
    border-radius: 2px;
  }
`;
export default function Hero({ info }) {
  function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <Container>
      {info
        ? console.log("this is my data: ", info)
        : console.log("waiting for data")}
      <ImageWrapper>
        <picture>
          <source
            media="(max-width: 599px)"
            srcSet={
              info.mobileImage
                ? info.mobileImage.fields.file.url
                : "https://placehold.it/800x700"
            }
            media="(min-width: 992px)"
            srcSet={
              info.desktopImage
                ? info.desktopImage.fields.file.url
                : "https://placehold.it/1600x700"
            }
          />
          <img
            src={
              info.mobileImage
                ? info.mobileImage.fields.file.url
                : "https://placehold.it/800x700"
            }
            className="home-hero__image"
          />
        </picture>
      </ImageWrapper>
      <TextContainer>
        <TitleText
          title={info.title ? info.title_text[0].fields.title : "Lorem Ipsum"}
          desktopColor="#fff"
          desktopFont="Basetica"
          desktopTextAlign="left"
          mobileColor="#4d4d4d"
          mobileFont="Basetica"
          mobileTextAlign="center"
          dropShadow={false}
        />
        <Subtitle
          desktopColor="#fff"
          desktopFont="Basetica"
          desktopTextAlign="left"
          mobileColor="#4d4d4d"
          mobileFont="Basetica"
          mobileTextAlign="center"
          dropShadow={false}
        >
          {info.subtitle
            ? info.subtitle[0].fields.text
            : "Lorem ipsum blah blah blah"}
        </Subtitle>
        {info.cta ? (
          info.cta.map((cta, index) => (
            <Cta
              key={cta.sys.id || randomNumber(423)}
              href={cta.fields.ctaUrl}
              desktopBackgroundColor={cta.fields.backgroundColor || "#fff"}
              desktopFont={cta.fields.fontStyle || "Basetica"}
              desktopColor={cta.fields.ctaHexColor || "#4d4d4d"}
              desktopBorderColor={cta.fields.ctaBorderColor || "transparent"}
              desktopTextAlignment={cta.fields.desktopTextAlignment}
              desktopTextShadow={cta.fields.desktopShadow || false}
              mobileBackgroundColor={cta.fields.mobileBackgroundColor || "#fff"}
              mobileFont={cta.fields.fontStyle || "Basetica"}
              mobileColor={cta.fields.ctaMobileHexColor || "#4d4d4d"}
              mobileTextShadow={cta.fields.TextShadow || false}
              mobileTextAlignment={cta.fields.mobileTextAlignment || false}
            >
              {console.log(cta)}
              {cta.fields.ctaText}
            </Cta>
          ))
        ) : (
          <>
            <Cta
              key={randomNumber(423)}
              href={"/"}
              desktopBackgroundColor={"#fff"}
              desktopFont={"Basetica"}
              desktopColor={"#4d4d4d"}
              desktopBorderColor={"transparent"}
              mobileBackgroundColor={"#fff"}
              mobileFont={"Basetica"}
              mobileColor={"#4d4d4d"}
              mobileTextAlignment={"center"}
            >
              Cta
            </Cta>
            <Cta
              key={randomNumber(423)}
              href={"/"}
              desktopBackgroundColor={"#fff"}
              desktopFont={"Basetica"}
              desktopColor={"#4d4d4d"}
              desktopBorderColor={"transparent"}
              mobileBackgroundColor={"#fff"}
              mobileFont={"Basetica"}
              mobileColor={"#4d4d4d"}
              mobileTextAlignment={"center"}
            >
              Cta
            </Cta>
          </>
        )}
      </TextContainer>
    </Container>
  );
}
