import React from 'react';
import styled from 'styled-components';
import { Container } from '../../style/main';
import { primaryColor, primaryBackgroundColor } from '../../style/colors';
import logo from '../../assets/images/1.i.1-transparent.png';
import instaLogo from '../../assets/images/glyph-logo_May2016.png';

interface Props {
  sectionHeight: number;
}

export const MainSection: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: primaryColor }}>
      <Container>
        <SectionStyle>
          <Title>Magan Gallery</Title>
          <BookMeLink href="#">Book Me</BookMeLink>
          <Icons>
            <IconLink href="https://www.instagram.com/magangallery/" target="_blank" rel="noopener noreferrer">
              <Image src={instaLogo} alt="instagram logo" style={{ marginTop: '.1em' }} />
            </IconLink>
            <IconLink>
              <Image src={logo} alt="collective logo" />
            </IconLink>
          </Icons>
        </SectionStyle>
      </Container>
    </div>
  );
};

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid magenta; */
  background-color: ${primaryColor};
  min-height: 90vh;
`;

const BookMeLink = styled.a`
  padding: 1em 1.5em;
  color: ${primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  background: ${primaryBackgroundColor};
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: 2px;

  &:hover,
  :active,
  :focus {
    background-color: white;
    color: ${primaryBackgroundColor};
  }
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  color: ${primaryBackgroundColor};
  letter-spacing: 2px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 90%;
`;

const IconLink = styled.a`
  /* border: 2px magenta solid; */
  max-width: 30%;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: 4em;
  /* border: magenta 2px solid; */
`;
