const initState = {
  byId: {
    A_1: {id: 'A_1', name: 'Artist 001'},
  },
  allIds: ['A_1'],
};

const artists = (state = initState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default artists;
