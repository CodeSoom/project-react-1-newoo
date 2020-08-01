import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  initialState,
  setCookies,
  loadCookies,
} from './slice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  let store;

  describe('loadCookies', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCookies', async () => {
      await store.dispatch(loadCookies());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCookies([]));
    });
  });
});

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setCookies', () => {
    it('changes cookies', () => {
      const defaultState = {
        cookies: [],
      };

      const cookies = [
        {
          id: 1,
          name: '밀크 초콜릿 청크(Milk Chocolate Chunk)',
          ingredients: '밀가루, 황설탕, 밀크초콜렛, 무염버터, 계란, 마가린, 베이킹파우더, 소금',
          nutrition: '탄수화물 54.7%, 단백질 6.6%, 지방 24.7%, 섬유질 1.7%, 총 398칼로리',
          weight: '85g',
        },
      ];

      const state = reducer(defaultState, setCookies(cookies));

      expect(state.cookies).toHaveLength(1);
    });
  });
});
