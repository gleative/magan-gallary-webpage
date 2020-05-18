import React from 'react';
import styled from 'styled-components';
import { Container } from './style/main';
import { Menu } from './menu/menu';
import { primaryColor, primaryBackgroundColor } from './style/colors';
import { Section } from './components/section/section';
import { MainSection } from './components/mainSection/mainSection';

function App() {
  return (
    <div>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <MainSection sectionHeight={100} />
      </main>
      <Section></Section>
    </div>
  );
}

export default App;
