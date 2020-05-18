import React from 'react';
import styled from 'styled-components';
import { Container } from '../../style/main';
import { primaryColor, primaryBackgroundColor } from '../../style/colors';
import StagePhoto from '../../assets/images/stage-1.jpg';

export const Section = () => {
  return (
    <>
      <Container>
        <SectionStyle>
          <Paragraph>
            <span style={{ color: primaryColor }}>Magan</span> er en fremadstormende nykommer fra Arendal, som har
            kommet langt på sin korte karriere innenfor standup. Han har på kort tid rukket å stå på de de største
            scenene i Oslo, Bergen og Trondheim.
          </Paragraph>
          <Image src={StagePhoto} alt="Magan performing on stage" />
        </SectionStyle>
      </Container>
    </>
  );
};

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  background-color: ${primaryBackgroundColor};
`;

const Image = styled.img`
  max-width: 100%;
`;

const Paragraph = styled.p`
  font-size: 25px;
`;
