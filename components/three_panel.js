import React from "react";
import styled from "styled-components";
import Panel from "./panel";

const Container = styled.section`
  width: 100%;
  margin: 24px auto;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    margin: 24px auto;
    max-width: 1280px;
  }
`;
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: Basetica-Regular;
  font-size: 28px;
  color: #4d4d4d;
  letter-spacing: 0;
  text-align: center;
  line-height: 30px;
  margin: 0;
  text-shadow: 0 0 80px rgba(0, 0, 0, 0.5);
`;

const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default function threePanel({ info }) {
  console.log("this is my threePanel: ", info);
  return (
    <Container>
      <TitleWrapper>
        <Title>{info.title}</Title>
      </TitleWrapper>
      <PanelWrapper>
        {info.panels ? (
          info.panels.map((item, i) => {
            return (
              <Panel
                image={item.fields.panelImage.fields.file.url}
                text={item.fields.panelName}
              />
            );
          })
        ) : (
          <>
            <Panel image={"http://placehold.it/800x800"} text={"Lorem Ipsum"} />
            <Panel image={"http://placehold.it/800x800"} text={"Lorem Ipsum"} />
            <Panel image={"http://placehold.it/800x800"} text={"Lorem Ipsum"} />
          </>
        )}
      </PanelWrapper>
    </Container>
  );
}
