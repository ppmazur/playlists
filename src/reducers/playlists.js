import uniqid from 'uniqid';

import {
  PLAYLIST_ADD,
  PLAYLIST_SET_ACTIVE,
  PLAYLIST_ADD_TRACK,
  PLAYLIST_CLOSE_MODAL,
  PLAYLIST_OPEN_MODAL, FETCH_PLAYLISTS_SUCCESS,
} from '../actions';

const playlist1Id = uniqid();
export const initState = {
  byId: {
    [playlist1Id]: {
      id: playlist1Id,
      name: 'All tracks',
      tracks: ['S_1', 'S_2', 'S_3', 'S_4', 'S_5', 'S_6', 'S_7', 'S_8', 'S_9'],
    },
  },
  allIds: [playlist1Id],
  activePlaylist: playlist1Id,
  trackToAdd: null,
};

const playlists = (state = initState, action) => {
  switch (action.type) {
  case FETCH_PLAYLISTS_SUCCESS:
    return {
      ...state,
      byId: {...state.byId, ...action.playlists},
      allIds: [...state.allIds, ...Object.keys(action.playlists)],
    };
  case PLAYLIST_ADD:
    const { playlist } = action;
    return {
      ...state,
      byId: {...state.byId, [playlist.id]: playlist},
      allIds: [...state.allIds, playlist.id],
    };

  case PLAYLIST_SET_ACTIVE:
    return {
      ...state,
      activePlaylist: action.id,
    };

  case PLAYLIST_OPEN_MODAL:
    return {
      ...state,
      trackToAdd: action.trackId,
    };

  case PLAYLIST_CLOSE_MODAL:
    return {
      ...state,
      trackToAdd: null,
    };

  case PLAYLIST_ADD_TRACK:
    const playlists = {...state.byId};
    if (!playlists[action.id].tracks.includes(action.trackId)) {
      playlists[action.id].tracks.push(action.trackId);
    }
    return {
      ...state,
      byId: {...playlists},
      trackToAdd: null,
    };

  default:
    return state;
  }
};

export default playlists;
