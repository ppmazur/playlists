import tracks, { initState } from './tracks';

describe('reducers - tracks', () => {
  it('provides the initial state', () => {
    expect(tracks(undefined, {}))
      .toEqual(initState);
  });
});
