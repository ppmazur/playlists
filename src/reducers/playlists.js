import uniqid from 'uniqid';

const playlist1Id = uniqid();
const playlist2Id = uniqid();
const initState = {
  byId: {
    [playlist1Id]: {id: playlist1Id, name: 'Default list', tracks: ['S_1', 'S_4', 'S_5', 'S_9']},
    [playlist2Id]: {id: playlist2Id, name: 'First random list', tracks: ['S_1', 'S_2', 'S_3', 'S_7', 'S_8']},
  },
  allIds: [playlist1Id, playlist2Id],
  activePlaylist: playlist1Id,
};

const playlists = (state = initState, action) => {
  switch (action.type) {
  case 'ADD_PLAYLIST':
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
  case 'SET_ACTIVE_PLAYLIST':
    return {
      ...state,
      activePlaylist: action.id,
    };
  default:
    return state;
  }
};

export default playlists;
