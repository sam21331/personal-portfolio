import React, { useState } from "react";
import styled from "styled-components";
import PassionsContent from "../content/passions";

const PassionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.between};
  flex-direction: column;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  max-width: 900px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-width: 600px) {
    margin-top: 10vh;
  }
`;

const PassionsName = styled.h3`
  color: white;
  display: flex;
  font-size: 2.3rem;
  text-align: center;
  & sup {
    color: orange;
    font-weight: normal;
    margin: 0 0.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  & button:first-child {
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const TopicButton = styled.button<{ filled: boolean }>`
  margin: 0 0.5rem;
  border: 1px solid orange;
  outline: none;
  background-color: ${(props) => (props.filled ? "orange" : "#3b4d61")};
  color: white;
  border-radius: 0%;
  padding: 0.3rem 0.5rem;
  font-weight: ${(props) => (props.filled ? "bold" : "normal")};
  cursor: pointer;
  font-size: 0.9rem;
  font-family: inherit;
`;

const ContentWrapper = styled.p`
  color: white;
  margin: 0.5rem 0;
  font-weight: 100;
  width: 56%;
  font-size: 1.1rem;

  &::before {
    content: "▹";
    color: orange;
    margin-right: 0.5rem;
  }

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 630px) {
    width: 85%;
    padding: 0 1rem;
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
  }
`;

const TopicSelect = styled.select`
  text-align: center;
  margin: 1rem auto 0 auto;
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.specialText};
  outline: none;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.mainText};
  padding: 0.5rem 2rem;
  text-align: center;

  @media (min-width: 600px) {
    display: none;
  }
`;

const PassionsList: PassionT[] = [
  "Programming",
  "WebRTC",
  "Frontend",
];

type PassionT = "Programming" | "WebRTC" | "Frontend";

const Passions: React.FC = () => {
  const [tab, setTab] = useState<PassionT>("Programming");

  const tabContent = PassionsContent[tab];
  return (
    <PassionsWrapper id="passions">
      <div>
        <PassionsName>
          <sup>02.</sup>Passions
        </PassionsName>
        <ButtonsWrapper>
          {PassionsList.map((passion, ind) => {
            return (
              <TopicButton
                key={ind}
                filled={tab === passion}
                onClick={() => {
                  setTab(passion);
                }}
              >
                {passion}
              </TopicButton>
            );
          })}
        </ButtonsWrapper>
        <TopicSelect onChange={(e) => setTab(e.target.value as PassionT)}>
          {PassionsList.map((passion, ind) => {
            return (
              <option value={passion} key={ind}>
                {passion}
              </option>
            );
          })}
        </TopicSelect>
      </div>
      <br />

      {tabContent.map((tabContentItem: string, ind: number) => {
        return (
          <ContentWrapper
            key={ind}
            dangerouslySetInnerHTML={{ __html: tabContentItem }}
          ></ContentWrapper>
        );
      })}
    </PassionsWrapper>
  );
};

export default Passions;
