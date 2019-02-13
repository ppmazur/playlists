import uniqid from 'uniqid';

export const PLAYLIST_ADD = 'PLAYLIST_ADD';
export const PLAYLIST_SET_ACTIVE = 'PLAYLIST_SET_ACTIVE';
export const PLAYLIST_ADD_TRACK = 'PLAYLIST_ADD_TRACK';
export const PLAYLIST_CLOSE_MODAL = 'PLAYLIST_CLOSE_MODAL';
export const PLAYLIST_OPEN_MODAL = 'PLAYLIST_OPEN_MODAL';

export const addPlaylist = name => ({
  type: PLAYLIST_ADD,
  id: uniqid(),
  name,
});
export const setActivePlaylist = playlistId => ({
  type: PLAYLIST_SET_ACTIVE,
  id: playlistId,
});
export const openPlaylistsModal = trackId => ({
  type: PLAYLIST_OPEN_MODAL,
  trackId,
});
export const closePlaylistsModal = () => ({
  type: PLAYLIST_CLOSE_MODAL,
});
export const addTrackToPlaylist = (playlistId, trackId) => ({
  type: PLAYLIST_ADD_TRACK,
  id: playlistId,
  trackId: trackId,
});
