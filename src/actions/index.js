import uniqid from 'uniqid';

import { savePlaylist, getPlaylists, saveTrackInPlaylist } from '../api';

export const PLAYLIST_ADD = 'PLAYLIST_ADD';
export const PLAYLIST_SET_ACTIVE = 'PLAYLIST_SET_ACTIVE';
export const PLAYLIST_ADD_TRACK = 'PLAYLIST_ADD_TRACK';
export const PLAYLIST_CLOSE_MODAL = 'PLAYLIST_CLOSE_MODAL';
export const PLAYLIST_OPEN_MODAL = 'PLAYLIST_OPEN_MODAL';
export const FETCH_PLAYLISTS_LOADING = 'LOAD_PLAYLISTS_LOADING';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR';

export const fetchPlaylists = () => async dispatch => {
  dispatch({
    type: FETCH_PLAYLISTS_LOADING,
  });
  try {
    const playlists = await getPlaylists();
    dispatch({
      type: FETCH_PLAYLISTS_SUCCESS,
      playlists,
    });
  } catch (e) {
    dispatch({
      type: FETCH_PLAYLISTS_ERROR,
      message: e.message,
    });
  }
};
export const addPlaylist = name => async dispatch => {
  const playlist = {
    id: uniqid(),
    name,
    tracks: [],
  };
  try {
    await savePlaylist(playlist);
    dispatch({
      type: PLAYLIST_ADD,
      playlist,
    });
  } catch (e) {
    dispatch({
      type: 'ERROR',
      message: e.message,
    });
  }
};
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
export const addTrackToPlaylist = (playlistId, trackId) => async dispatch => {
  await saveTrackInPlaylist(playlistId, trackId);
  dispatch({
    type: PLAYLIST_ADD_TRACK,
    id: playlistId,
    trackId: trackId,
  });
};

