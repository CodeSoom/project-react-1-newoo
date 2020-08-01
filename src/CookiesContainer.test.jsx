import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CookiesContainer from './CookiesContainer';

import COOKIES from '../fixtures/cookies';

describe('CookiesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      cookies: COOKIES,
    }));
  });

  it('redners cookies', () => {
    const { container } = render((
      <CookiesContainer />
    ));

    expect(container).toHaveTextContent(COOKIES[0].name);
  });
});
