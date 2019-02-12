import uniqid from 'uniqid';

export const PLAYLIST_ADD = 'PLAYLIST_ADD';
export const PLAYLIST_SET_ACTIVE = 'PLAYLIST_SET_ACTIVE';

export const addPlaylist = name => ({
  type: PLAYLIST_ADD,
  id: uniqid(),
  name,
});
export const setActivePlaylist = playlistId => ({
  type: PLAYLIST_SET_ACTIVE,
  id: playlistId,
});
