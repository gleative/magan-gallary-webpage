import React from 'react';
import { Container } from './style/main';
import { Menu } from './menu/menu';

function App() {
  return (
    <div>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <Container>
          <h1>Magan Gallery</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;
