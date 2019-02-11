const initState = {
  byId: {
    S_1: { id: 'S_1', title: '111 Song', artist: 'Artist Name 1'},
    S_2: { id: 'S_2', title: '222 Song', artist: 'Artist Name 2' },
  },
  allIds: ['S_1', 'S_2'],
};

const songs = (state = initState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default songs;
