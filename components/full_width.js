import React from "react";
import styled from "styled-components";
import { Picture } from "react-responsive-picture";

const Container = styled.section`
  background-color: transparent;
  width: 100%;

  @media (min-width: 768px) {
    position: relative;
    margin: 24px auto;
    max-width: 1280px;
  }
`;

const Title = styled.h1`
  font-family: Basetica-Regular;
  font-size: 40px;
  color: #4d4d4d;
  letter-spacing: -0.5px;
  line-height: 46px;
  text-shadow: 0 0 90px rgba(0, 0, 0, 0.5);
  margin: 0 0 8px;

  @media (min-width: 768px) {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    img {
      width: 100%;
      display: block;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  margin-top: 27px;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    width: 100%;
    max-width: 1280px;
    text-align: left;
    transform: translateY(-50%);
    padding: 0 75px;
  }
`;
const Subtitle = styled.span`
  font-family: Basetica-Regular;
  font-size: 16px;
  color: #4d4d4d;
  display: block;
  margin: 0 0 16px;
  @media (min-width: 768px) {
    color: #fff;
  }
`;
const Cta = styled.a`
  padding: 16px 64px;
  background-color: #fff;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0;
  margin-top: 0;
  line-height: 19px;
  width: auto;
  min-width: 220px;
  margin: 1rem;
  margin-right: 20px;
  color: #4d4d4d;
  line-height: 10px;
  font-size: 12px;
  letter-spacing: 0.1em;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-family: Basetica Bold, sans-serif;
  background: #ffffff;
  border: 1px solid transparent;
  border-radius: 2px;
`;

export default function FullWidth({ info }) {
  return (
    <Container>
      <ImageContainer>
        {console.log("this is my full panel", info)}
        <Picture
          sources={[
            {
              srcSet: `${
                info.mobileImage && info.mobileImage.fields.file
                  ? info.mobileImage.fields.file.url
                  : "https://place-hold.it/800x700"
              }`,
              media: "(max-width:767px)"
            },
            {
              srcSet: `${
                info.desktopImage && info.desktopImage.fields.file
                  ? info.desktopImage.fields.file.url
                  : "https://place-hold.it/1600x700"
              }`,
              media: "(min-width: 768)"
            }
          ]}
          src={
            info.desktopImage && info.desktopImage.fields
              ? info.desktopImage.fields.file.url
              : "https://place-hold.it/1600x700"
          }
        />
      </ImageContainer>
      <TextContainer>
        <Title>{info.title ? info.title.fields.title : "Lorem Ipsum"}</Title>
        <Subtitle>
          {info.subtitle
            ? info.subtitle[0].fields.text
            : "lorem ipsum blah blah blah"}
        </Subtitle>
        {info.cta ? (
          info.cta.map((cta, index) => (
            <Cta href={cta.fields.ctaUrl}>{cta.fields.ctaText}</Cta>
          ))
        ) : (
          <>
            <Cta
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
