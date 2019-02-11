const initState = {
  byId: {
    P_1: {id: 'P_1', name: 'Default list', songs: ['S_1']},
  },
  allIds: ['P_1'],
};

const playlists = (state = initState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default playlists;
