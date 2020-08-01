import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCookies,
} from './services/api';

export const initialState = {
  cookies: [],
};

const reducers = {
  setCookies(state, { payload: cookies }) {
    return {
      ...state,
      cookies,
    };
  },
};

const slice = createSlice({
  name: 'application',
  initialState,
  reducers,
});

const { actions, reducer } = slice;

export const {
  setCookies,
} = actions;

export function loadCookies() {
  return async (dispatch) => {
    const cookies = await fetchCookies();
    dispatch(setCookies(cookies));
  };
}

export default reducer;
