import React from 'react';
import styled from 'styled-components';
import { Container } from './style/main';
import { Menu } from './menu/menu';
import { primaryColor, primaryBackgroundColor } from './style/colors';
import { Section } from './components/home/section/section';
import { MainSection } from './components/home/mainSection/mainSection';

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BookMe } from './components/bookMe/bookMe';
import { Home } from './components/home/home';

function App() {
  if (!!window.IntersectionObserver) {
    // ? Takes two functions
    // * callback: function that is called when the observerer notice intersection
    // * options: her kan du definerer når den skal reagere, eks når en ting er 20% synlig i view
    // let observer = new IntersectionObserver(callback, options);
  } else {
    alert('Dont use IE, use chrome or something else... not IE');
  }

  const Header = styled.header`
    position: sticky;
    top: 0;
  `;

  return (
    <Router>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-me" component={BookMe} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
