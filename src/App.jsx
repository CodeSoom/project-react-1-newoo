import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import CookieGridPage from './CookieGridPage';

// add pages

const Header = styled.header({
  opacity: 0.7,
  '& h1': {
    fontSize: '2.5em',
    margin: 0,
    padding: '1em .5em',
    textAlign: 'center',
  },
  '& a': {
    color: '#393e46',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

function App() {
  return (
    <div>
      <Header>
        <h1>
          <Link to="/">COOKIE MONSTER</Link>
        </h1>
      </Header>
      <Switch>
        <Route exact path="/" component={CookieGridPage} />
      </Switch>
    </div>
  );
}

export default React.memo(App);
