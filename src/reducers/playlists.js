import uniqid from 'uniqid';

import {
  PLAYLIST_ADD,
  PLAYLIST_SET_ACTIVE,
  PLAYLIST_ADD_TRACK,
  PLAYLIST_CLOSE_MODAL,
  PLAYLIST_OPEN_MODAL,
} from '../actions';

const playlist1Id = uniqid();
const playlist2Id = uniqid();
const initState = {
  byId: {
    [playlist1Id]: {id: playlist1Id, name: 'Default list', tracks: ['S_1', 'S_4', 'S_5', 'S_9']},
    [playlist2Id]: {id: playlist2Id, name: 'First random list', tracks: ['S_1', 'S_2', 'S_3', 'S_7', 'S_8']},
  },
  allIds: [playlist1Id, playlist2Id],
  activePlaylist: playlist1Id,
  trackToAdd: null,
};

const playlists = (state = initState, action) => {
  switch (action.type) {

  case PLAYLIST_ADD:
    const { id, name } = action;
    const newPlaylist = {
      id,
      name,
      tracks: [],
    };
    return {
      ...state,
      byId: {...state.byId, [id]: newPlaylist},
      allIds: [...state.allIds, id],
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
