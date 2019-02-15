import playlists, { initState } from './playlists';
import { fetchPlaylistsSuccess } from '../actions';

describe('reducers - playlists', () => {
  const mockedInitialState = {
    byId: {},
    allIds: [],
    activePlaylist: null,
    trackToAdd: null,
  };
  it('provides the initial state', () => {
    expect(playlists(undefined, {}))
      .toEqual(initState);
  });

  it('handles FETCH_PLAYLIST_SUCCESS', () => {
    const mockedPlaylists = {
      id1: {id: 'id1'},
      id2: {id: 'id2'},
    };
    const updatedState = playlists(mockedInitialState, fetchPlaylistsSuccess(mockedPlaylists));
    expect(updatedState.allIds.length).toEqual(2);
    expect(Object.entries(updatedState.byId).length).toEqual(2);
    expect(updatedState.byId[mockedPlaylists.id1.id]).toEqual(mockedPlaylists.id1);
    expect(updatedState.byId[mockedPlaylists.id2.id]).toEqual(mockedPlaylists.id2);
  });

  it('handles PLAYLIST_ADD', () => {
    const mockedPlaylist = {
      id: 'id1',
      name: 'name',
    };
    expect(mockedInitialState.allIds.length).toEqual(0);
    const updatedState = playlists(
      mockedInitialState,
      {type: 'PLAYLIST_ADD', playlist: mockedPlaylist},
    );
    expect(updatedState.allIds.length).toEqual(1);
    expect(updatedState.byId[mockedPlaylist.id].id).toEqual(mockedPlaylist.id);
  });

});
