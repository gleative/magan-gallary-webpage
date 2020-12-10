import React from 'react';
import styled from 'styled-components';

import { Container } from '../../style/main';
import { primaryColor, primaryBackgroundColor } from '../../style/colors';
import { Link } from 'react-router-dom';

export const BookMe: React.FC = () => {
  return (
    <MainContainer>
      {/* <ShapeDividerTop>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <ShapeFill d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></ShapeFill>
          </svg>
        </ShapeDividerTop> */}
      <Container>
        <Flex>
          <Title>Book Me</Title>
          <InputContainer>
            <Label htmlFor="subject">Subject:</Label>
            <Input placeholder="Subject" name="subject"></Input>

            <Label htmlFor="message">Message:</Label>
            <TextArea name="message" />

            <BookBtn>book</BookBtn>
          </InputContainer>

          <Text>
            Want to use your preferred e-mail client? Contact me:{' '}
            <StyledLink href="mailto:magan.gallery@hotmail.com">magan.gallery@hotmail.com</StyledLink>
          </Text>
        </Flex>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  animation: 1s fadein;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  height: 4em;
  padding: 0.5em;
`;

const TextArea = styled.textarea`
  height: 80%;
  padding: 0.5em;
  resize: none;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
`;

const Title = styled.h2`
  margin: 1.25em 0;
  font-size: 2.5em;
  letter-spacing: 5px;
  font-weight: 250;
  text-transform: uppercase;
  color: ${primaryColor};
`;

const BookBtn = styled.button`
  margin: 1em auto;
  background: ${primaryColor};
  outline: none;
  border: 0;
  font-size: 1.4em;
  padding: 0.8em 0.8em;
  text-transform: uppercase;
  width: 100%;
  align-self: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: ${primaryColor};
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: white;
  font-size: 1.2em;
`;

const Text = styled.p`
  margin: 1em 0;
`;

const Label = styled.label`
  margin: 0.5em 0;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 93vh; */
  justify-content: space-around;
`;
const ShapeDividerTop = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(125% + 1.3px);
    height: 20vh;
  }
`;

const ShapeFill = styled.path`
  fill: #21222b;
  /* fill: pink; */
`;
