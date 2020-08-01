import {
  fetchCookies,
} from './api';

import COOKIES from '../../fixtures/cookies';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchCookies', () => {
    beforeEach(() => {
      mockFetch(COOKIES);
    });

    it('returns cookies', async () => {
      const regions = await fetchCookies();

      expect(regions).toEqual(COOKIES);
    });
  });
});
