import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

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

const Grid = styled.div({
    display: 'flex',
})

export default function App() {

  return (
    <div>
      <Header>
        <h1>
          <Link to="/">COOKIE MONSTER</Link>
        </h1>
      </Header>
          <Grid>
              <div className="grid-item">1</div>
              <div className="grid-item">2</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
              <div className="grid-item">5</div>
              <div className="grid-item">6</div>
              <div className="grid-item">7</div>
              <div className="grid-item">8</div>
              <div className="grid-item">9</div>
          </Grid>
    </div>
  );
}