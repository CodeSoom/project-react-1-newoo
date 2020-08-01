import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadCookies,
} from './slice';

import { get } from './utils';

function CookiesContainer() {
  const dispatch = useDispatch();

  const cookies = useSelector(get('cookies'));

  useEffect(() => {
    dispatch(loadCookies());
  }, []);

  return (
    <div>
      {cookies.map((cookie) => (
        <h5 key={cookie.id}>{cookie.name}</h5>
      ))}
    </div>
  );
}

export default React.memo(CookiesContainer);
