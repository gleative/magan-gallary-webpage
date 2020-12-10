import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../style/main';
import { primaryColor, primaryBackgroundColor } from '../../../style/colors';
import StagePhoto from '../../../assets/images/stage-1.jpg';

interface SeenProps {
  seen: boolean;
}

export const Section = () => {
  const [isSeen, setIsSeen] = React.useState(false);

  // Time to observe
  // TODO: FINN EN MÅTE Å OBSERVE PÅ. KANSKJE BARE BRUK INTERSECTION REACT API
  // maganBioObserver.observe(Container);

  return (
    <>
      <Container className="bio-container" id="bio">
        <SectionStyle>
          <ContentContainer>
            <ImageContainer>
              <Image className="magan-img" src={StagePhoto} alt="Magan performing on stage" seen={isSeen} />
            </ImageContainer>
            <ParagraphContainer>
              <InvisibleBox>
                <Paragraph>
                  <span style={{ color: primaryColor, fontWeight: 'bold' }}>Magan</span> er en fremadstormende nykommer
                  fra Arendal, som har kommet langt på sin korte karriere innenfor standup. Han har på kort tid rukket å
                  stå på de de største scenene i Oslo, Bergen og Trondheim.
                </Paragraph>
              </InvisibleBox>

              <MediaBox>
                <MediaParagraph>Du finner Magan på:</MediaParagraph>
                <Icons>
                  {/* Instagram */}
                  <IconLink href="https://www.instagram.com/magangallery/" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      viewBox="0 0 24 24"
                      style={{ marginTop: '0.7em' }}
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </IconLink>
                  {/* NRK */}
                  <IconLink href="https://tv.nrk.no/sok?q=Magan%20Gallery" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 35 14" width="6.5em" height="4.4em" aria-hidden="true" focusable="false">
                      <path d="M31.0878023 7.55918018c-.2517074-.42642875-.2661333-.68861697-.02338-1.10029556L34.399462 1h-4.6267395s-2.7797248 4.54205453-3.1597731 5.17316245c-.3764003.63027925-.3601505 1.02273292.0154208 1.67041405C27.0084185 8.49042897 29.7727225 13 29.7727225 13h4.6267395s-3.2751804-5.37353258-3.3116597-5.44081982M21.5941377 13h4.2077247V1h-4.2077247M18.9405537.77010873c-1.3163763 0-2.3817762 1.07539896-2.3817762 2.40310754 0 1.32687533 1.0653999 2.4056073 2.3817762 2.4056073 1.3185428 0 2.3884423-1.07873197 2.3884423-2.4056073 0-1.32770858-1.0698995-2.40310754-2.3884423-2.40310754M12.0635332 13h4.2052375V1h-4.2052375M0 13h4.19744416V1H0M9.50872938 2.92796177C9.29333553 1.82832914 8.33144198 1 7.17852938 1H4.47507953l2.71654925 12h4.56969912L9.50872938 2.92796177z"></path>
                    </svg>
                  </IconLink>
                </Icons>
              </MediaBox>
            </ParagraphContainer>
          </ContentContainer>
        </SectionStyle>
      </Container>
    </>
  );
};

const SectionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 120vh;
  background-color: ${primaryBackgroundColor};
  /* border: 2px solid magenta; */

  @media (max-width: 1331px) {
    padding: 2em 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 1331px) {
    flex-flow: column nowrap;
  }
`;

const ImageContainer = styled.div`
  width: 48%;

  @media (max-width: 1331px) {
    width: 100%;
  }
`;

// ? SeenProps - contains structure of props it can receive
const Image = styled.img<SeenProps>`
  max-width: 90%;

  @media (max-width: 1331px) {
    max-width: 70%;
    padding: 2em 0;
    display: block; /* Images are inline by default... therefor must use display block for margin to work */
    margin: 0 auto;
  }

  @media (max-width: 1055px) {
    max-width: 100%;
  }
`;

const ParagraphContainer = styled.p`
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;

  @media (max-width: 1331px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 1055px) {
    width: 100%;
    margin: auto;
  }
`;

const InvisibleBox = styled.div`
  /* ! SOULD HAVE SAME PADDING AS MediaBox, so texts are aligned! */
`;

const Paragraph = styled.p`
  font-size: 2rem;
  padding-bottom: 1em;

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const MediaBox = styled.div`
  /* ! SOULD HAVE SAME PADDING AS InvisibleBox, so texts are aligned! */
  padding: 1em 2em;
  background-color: ${primaryColor};
  color: black;
  display: flex;
  flex-flow: column nowrap;
`;

const MediaParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1em;
`;

const Icons = styled.div`
  display: flex;
  /* border: 2px solid magenta; */
`;

const IconLink = styled.a`
  padding-right: 1.5em;

  /* border: 2px solid pink; */
`;
