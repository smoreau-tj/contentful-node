import React from "react";
import styled from "styled-components";
import { Picture } from "react-responsive-picture";
import TitleText from "./titleText";
import SubtitleText from "./subtitle";

const Container = styled.section`
  background-color: transparent;
  width: 100%;

  @media (min-width: 768px) {
    position: relative;
    margin: 24px auto;
    max-width: 1280px;
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
  border: 1px solid ${props => props.mobileBorderColor};
  border-radius: 2px;
`;

export default function FullWidth({ info }) {
  console.log("this is my fullwidth data:", info);
  return (
    <Container>
      <ImageContainer>
        <Picture
          sources={[
            {
              srcSet: `${
                info.mobileImage && info.mobileImage.fields.file
                  ? info.mobileImage.fields.file.url
                  : "https://placehold.it/800x700"
              }`,
              media: "(max-width:767px)"
            },
            {
              srcSet: `${
                info.desktopImage && info.desktopImage.fields.file
                  ? info.desktopImage.fields.file.url
                  : "http://placehold.it/1600x700"
              }`,
              media: "(min-width: 768)"
            }
          ]}
          src={
            info.desktopImage && info.desktopImage.fields
              ? info.desktopImage.fields.file.url
              : "https://placehold.it/1600x700"
          }
        />
      </ImageContainer>
      <TextContainer>
        <TitleText
          title={
            info.title_text ? info.title_text[0].fields.title : "Lorem Ipsum"
          }
          desktopColor="#fff"
          desktopFont="Basetica"
          desktopTextAlign="left"
          mobileColor="#4d4d4d"
          mobileFont="Basetica"
          mobileTextAlign="center"
          dropShadow={false}
        />
        <SubtitleText
          text={
            info.subtitle
              ? info.subtitle[0].fields.text
              : "lorem ipsum blah blah blah"
          }
        />
        {info.cta ? (
          info.cta.map((cta, index) => (
            <Cta
              key={cta.sys.id}
              // desktopBackgroundColor={}
              // desktopFont={}
              // desktopColor={}
              // desktopBorderColor={}
              // desktopTextAlign={}
              // mobileBackgroundColor={}
              mobileBorderColor={
                cta && cta.fields.ctaBorderColor
                  ? cta.fields.ctaBorderColor
                  : "#737373"
              }
              // mobileColor={}
              // mobileTextAlign={}
              href={cta.fields.ctaUrl}
            >
              {cta.fields.ctaText}
            </Cta>
          ))
        ) : (
          <>
            <Cta
              key={randomNumber(434)}
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
