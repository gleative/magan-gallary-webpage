import React from 'react';
import styled from 'styled-components';
import { primaryColor, primaryBackgroundColor } from '../style/colors';
import { Container } from '../style/main';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // ! Enables link to id's

interface Props {
  changeBackground?: boolean;
}

export const Menu: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    console.log('Hamburger clicked', isOpen);
    lockScroll();
  });

  function lockScroll() {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }

  function toggleNavMenu() {
    setIsOpen((val) => !val);
  }

  return (
    <>
      <Nav changeBackground={isOpen}>
        <Container>
          {/* Mobile nav */}
          <MobileNavContainer>
            <MobileNavHeader>
              {/* () => setIsOpen((val) => !val) */}
              <HamburgerContainer onClick={toggleNavMenu} className={isOpen ? 'open' : ''}>
                <Line changeBackground={isOpen} />
                <Line changeBackground={isOpen} />
                <Line changeBackground={isOpen} />
              </HamburgerContainer>

              <LogoUl>
                <NavItem>
                  <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                    // ? If hamburger menu is open, and user clicks MG (home), close the menu
                    onClick={() => {
                      if (isOpen) setIsOpen((val) => !val);
                    }}
                  >
                    <LogoLink changeBackground={isOpen}>MG</LogoLink>
                  </Link>
                </NavItem>
              </LogoUl>

              <BookMeContainer>
                {/* <Link to="/book-me" style={{ textDecoration: 'none' }}> */}
                <BookMe href="mailto:magan.gallery@hotmail.com" changeBackground={isOpen}>
                  Book
                </BookMe>
                {/* </Link> */}
              </BookMeContainer>
            </MobileNavHeader>
          </MobileNavContainer>
        </Container>
      </Nav>

      {/* changeBackground is from Props interface, that we must add when we create the component */}
      <MobileNavDropDown className={isOpen ? 'open' : ''} changeBackground={isOpen}>
        <NavList className={isOpen ? 'open' : ''}>
          <NavItem>
            <HashLink smooth to="#bio" style={{ textDecoration: 'none' }} onClick={toggleNavMenu}>
              <NavLink changeBackground={isOpen}>Bio</NavLink>
            </HashLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://tv.nrk.no/sok?q=Magan%20Gallery" target="_blank" changeBackground={isOpen}>
              NRK
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.instagram.com/magangallery/" target="_blank" changeBackground={isOpen}>
              Instagram
            </NavLink>
          </NavItem>
        </NavList>
      </MobileNavDropDown>
    </>
  );
};

const Nav = styled.nav`
  height: 10vh;
  background-color: ${(p: Props) => (p.changeBackground ? primaryBackgroundColor : primaryColor)};
  color: ${(p: Props) => (p.changeBackground ? primaryColor : primaryBackgroundColor)};
  display: flex;
  align-items: center;

  border-bottom: 2px solid ${primaryColor};

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
  background-color: ${(p: Props) => (p.changeBackground ? primaryBackgroundColor : primaryColor)};
  color: ${primaryBackgroundColor};
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
  background-color: ${(p: Props) => (p.changeBackground ? primaryColor : primaryBackgroundColor)};
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
  /* ! TODO: Ha MG synelig.... */
  color: ${(p: Props) => (p.changeBackground ? primaryColor : primaryBackgroundColor)};
  /* visibility: ${(p: Props) => (p.changeBackground ? 'visible' : 'gone')}; */
  /* color: ${primaryColor}; */

  cursor: pointer;
  font-weight: normal;
  font-size: 32px;
  width: 30%;
  text-decoration: none;
  letter-spacing: 0.085em;
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
  text-decoration: none;
  color: ${(p: Props) => (p.changeBackground ? primaryColor : primaryBackgroundColor)};
`;

const BookMeContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

const BookMe = styled.a`
  background-color: ${(p: Props) => (p.changeBackground ? primaryColor : primaryBackgroundColor)};
  padding: 1em 2em;
  color: ${(p: Props) => (p.changeBackground ? primaryBackgroundColor : primaryColor)};
  border-radius: 28px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 700px) {
    padding: 0.5em 1.5em;
  }
`;
