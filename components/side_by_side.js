import React from "react";
import styled from "styled-components";
import Side from "./side";

const Wrapper = styled.section`
  margin: 24px auto;
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
  }
`;

export default function sideBySide({ info }) {
  const { leftSide, rightSide } = info;
  return (
    <Wrapper>
      <Side
        key={rightSide ? rightSide.sys.id : randomNumber(422)}
        title={
          rightSide && rightSide.fields.title
            ? rightSide.fields.title.fields.title
            : "Right Side Title"
        }
        subtitle={
          rightSide && rightSide.fields.subtitle
            ? rightSide.fields.subtitle.fields.text
            : "Right Side Lorem ipsum"
        }
        ctaUrl="/womens-clothing"
        ctaText="Women's Clothing"
        image={
          rightSide && rightSide.fields.image.fields.file
            ? rightSide.fields.image.fields.file.url
            : "http://placehold.it/800x800"
        }
      />
      <Side
        key={leftSide ? leftSide.sys.id : randomNumber(422)}
        title={
          leftSide && leftSide.fields.title
            ? leftSide.fields.title.fields.title
            : "Left Side Title"
        }
        subtitle={
          leftSide && leftSide.fields.subtitle
            ? leftSide.fields.subtitle.fields.text
            : "Left Side Lorem Ipsum"
        }
        ctaUrl="/mens-clothing"
        ctaText="Men's Clothing"
        image={
          leftSide && leftSide.fields.image
            ? leftSide.fields.image.fields.file.url
            : "http://placehold.it/800x800"
        }
      />
    </Wrapper>
  );
}
