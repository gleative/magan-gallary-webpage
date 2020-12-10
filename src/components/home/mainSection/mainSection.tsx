import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../../../style/main';
import { primaryColor, primaryBackgroundColor } from '../../../style/colors';
import logo from '../../../assets/images/1.i.1-transparent.png';

interface Props {
  sectionHeight: number;
}

export const MainSection: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: primaryColor }}>
      <Container>
        <SectionStyle>
          <HeroContent>
            <Title>Magan Gallery</Title>
            <TitleParagraph>Fryktløs komedie</TitleParagraph>
            {/* TODO: FIKS MAIL SKJEMA */}
            {/* <Link to="/book-me"> */}
            <BookMeLink href="mailto:magan.gallery@hotmail.com">Book meg</BookMeLink>
            {/* </Link> */}
          </HeroContent>
          <Icons>
            <IconLink>
              <Image src={logo} alt="collective logo" className="første" />
            </IconLink>
          </Icons>
        </SectionStyle>
      </Container>
    </div>
  );
};

// **************** ANIMATIONS START ******************** //

// How many seconds to animation fade in
const time = 0.5;

const fadeIn = keyframes`
  from { opacity: 0 };
  to: { opacity: 1}
`;

// **************** ANIMATIONS END ******************** //

const SectionStyle = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid magenta; */
  background-color: ${primaryColor};
  min-height: 90vh;
`;

const HeroContent = styled.div`
  margin: auto;
`;

const Title = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.095em;
  text-align: center;
  margin-bottom: 0.3em;
  animation: ${fadeIn} ${time}s ease-in; /* imported from style/animation.js */

  @media (max-width: 700px) {
    font-size: 3.5rem;
  }
`;

const TitleParagraph = styled.p`
  color: black;
  letter-spacing: 0.095em;
  font-size: 40px;
  margin-top: 0.5em;
  margin-bottom: 1.25em;
  font-weight: normal;
  animation: ${fadeIn} ${time}s ease-in-out;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const BookMeLink = styled.a`
  padding: 1em 1.5em;
  margin-top: 1em;
  color: ${primaryColor};
  text-decoration: none;
  background: ${primaryBackgroundColor};
  display: inline-block;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-size: 1.2rem;
  letter-spacing: 2px;
  border-radius: 28px;
  animation: ${fadeIn} ${time}s ease-in;

  &:hover,
  :active,
  :focus {
    background-color: white;
    color: ${primaryBackgroundColor};
  }
`;

const Image = styled.img`
  max-width: 80%;
`;

const IconLink = styled.a`
  max-width: 30%;

  /* ? Tablet and up */
  @media (min-width: 650px) {
    max-width: 25%;
  }

  @media (min-width: 1000px) {
    max-width: 15%;
    margin: 0 1em;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  /* border: magenta 2px solid; */
  margin-top: auto; /* ? Forces the div to the bottom (sånn som vi gjør med nav element, å pusher alt til en side) */
  margin-bottom: 3em;
  animation: ${time}s ${fadeIn} ease-in;

  @media (min-width: 1000px) {
    justify-content: center;
  }

  /* border: magenta 2px solid; */
`;
