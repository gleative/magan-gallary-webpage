import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../style/colors';

export const Footer = () => {
  return (
    <>
      <FooterStyle>
        <p>Utviklet og designet av </p>
        <Link href="https://www.instagram.com/gleative/?hl=nb" target="_blank" rel="noopener noreferrer">
          Glenn Arne Christensen
        </Link>
      </FooterStyle>
    </>
  );
};

const FooterStyle = styled.footer`
  background: black;
  text-align: center;
  padding: 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 15vh;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${primaryColor};
  letter-spacing: 2px;

  &:hover {
    color: white;
  }
`;
