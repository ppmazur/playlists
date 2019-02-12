import uniqid from 'uniqid';

export const addPlaylist = name => ({
  type: 'ADD_PLAYLIST',
  id: uniqid(),
  name,
});

export const setActivePlaylist = playlistId => ({
  type: 'SET_ACTIVE_PLAYLIST',
  id: playlistId,
});
