import React from 'react';
import styled from 'styled-components';
import { primaryColor, primaryBackgroundColor } from '../style/colors';
import { Container } from '../style/main';

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    console.log('Hamburger clicked', isOpen);
    lockScroll();
  });

  function lockScroll() {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }

  return (
    <>
      <Nav>
        <Container>
          {/* Mobile nav */}
          <MobileNavContainer>
            <MobileNavHeader>
              <HamburgerContainer onClick={() => setIsOpen((val) => !val)} className={isOpen ? 'open' : ''}>
                <Line />
                <Line />
                <Line />
              </HamburgerContainer>

              <LogoUl>
                <NavItem>
                  <LogoLink>MG</LogoLink>
                </NavItem>
              </LogoUl>

              <BookMeContainer>
                <BookMe>Book</BookMe>
              </BookMeContainer>
            </MobileNavHeader>
          </MobileNavContainer>

          {/* Desktop */}
          {/* <NavList>
          <NavItem>
            <NavLink>About me</NavLink>
          </NavItem>
          <NavItem>Book me</NavItem>
        </NavList> */}
        </Container>
      </Nav>

      <MobileNavDropDown className={isOpen ? 'open' : ''}>
        <NavList className={isOpen ? 'open' : ''}>
          <NavItem>
            <NavLink>Bio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Instagram</NavLink>
          </NavItem>
        </NavList>
      </MobileNavDropDown>
    </>
  );
};

const Nav = styled.nav`
  /* padding: 1em 0; */
  height: 10vh;
  /* border: 2px solid cyan; */
  color: ${primaryColor};
  display: flex;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &.open {
    height: 100vh;
    background: white;
  }
`;

const MobileNavHeader = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileNavContainer = styled.div``;

const MobileNavDropDown = styled.ul`
  background-color: ${primaryBackgroundColor};
  color: ${primaryColor};
  /* opacity: 98%; */
  height: 0;
  position: absolute; /* We have this so content does not go below drop down */
  width: 100%;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &.open {
    height: 90vh;
  }
`;

const Line = styled.span`
  padding: 0.1em 0.75em;
  margin: 0.12em 0;
  background-color: ${primaryColor};
  width: 5%;
  position: relative;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
`;

const HamburgerContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 30%;

  /* Open animation */
  &.open {
    /* ? Access child of this container */
    & ${Line}:nth-child(1) {
      /* We rotate 135deg for it to spin a extra round */
      -webkit-transform: translateY(7px) rotate(-135deg);
      -moz-transform: translateY(7px) rotate(-135deg);
      -o-transform: translateY(7px) rotate(-135deg);
      transform: translateY(7px) rotate(-135deg);
    }

    /* Hides middle line */
    & ${Line}:nth-child(2) {
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }

    & ${Line}:nth-child(3) {
      -webkit-transform: translateY(-7px) rotate(135deg);
      -moz-transform: translateY(-7px) rotate(135deg);
      -o-transform: translateY(-7px) rotate(135deg);
      transform: translateY(-7px) rotate(135deg);
    }
  }
`;

const LogoUl = styled.ul`
  list-style: none;
`;

const LogoLink = styled.a`
  color: ${primaryColor};
  cursor: pointer;
  font-weight: 800;
  font-size: 32px;
  width: 30%;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  height: 0;
  opacity: 0;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &.open {
    height: 100%;
    opacity: 100;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-transform: uppercase;
`;

const BookMeContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

const BookMe = styled.a`
  background-color: ${primaryColor};
  padding: 0.5em 0.5em;
  border-radius: 100px;
  text-transform: uppercase;
  cursor: pointer;
`;
