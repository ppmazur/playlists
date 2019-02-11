const initState = {
  byId: {
    P_1: {id: 'P_1', name: 'Default list', tracks: ['S_1', 'S_4', 'S_5', 'S_9']},
  },
  allIds: ['P_1'],
  activePlaylist: 'P_1',
};

const playlists = (state = initState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default playlists;
