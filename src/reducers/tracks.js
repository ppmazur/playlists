const initState = {
  byId: {
    S_1: { id: 'S_1', title: '111 Song', artist: 'Artist Name 1', duration: 210},
    S_2: { id: 'S_2', title: '222 Song', artist: 'Artist Name 2', duration: 115},
    S_3: { id: 'S_3', title: '333 Song', artist: 'Artist Name 1', duration: 262},
    S_4: { id: 'S_4', title: '444 Song', artist: 'Artist Name 5', duration: 311},
    S_5: { id: 'S_5', title: '555 Song', artist: 'Artist Name 3', duration: 271},
    S_6: { id: 'S_6', title: '666 Song', artist: 'Artist Name 1', duration: 168},
    S_7: { id: 'S_7', title: '777 Song', artist: 'Artist Name 2', duration: 128},
    S_8: { id: 'S_8', title: '888 Song', artist: 'Artist Name 3', duration: 263},
    S_9: { id: 'S_9', title: '999 Song', artist: 'Artist Name 2', duration: 178},
  },
  allIds: ['S_1', 'S_2', 'S_3', 'S_4', 'S_5', 'S_6', 'S_7', 'S_8', 'S_9'],
};

const tracks = (state = initState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default tracks;
