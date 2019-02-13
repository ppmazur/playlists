const LS_PLAYLISTS_KEY = 'playlists';

export const getPlaylists = async () => {
  const playlists = localStorage.getItem(LS_PLAYLISTS_KEY);
  if (playlists) {
    return JSON.parse(playlists);
  } else {
    return {};
  }
};

export const savePlaylist = async playlist => {
  let playlists = await getPlaylists();
  if (!playlists) {
    playlists = {};
  }
  playlists[playlist.id] = playlist;
  localStorage.setItem(LS_PLAYLISTS_KEY, JSON.stringify(playlists));
};

export const saveTrackInPlaylist = async (playlistId, trackId) => {
  let playlists = await getPlaylists();
  if (!playlists) {
    playlists = {};
  }
  playlists[playlistId].tracks.push(trackId);
  localStorage.setItem(LS_PLAYLISTS_KEY, JSON.stringify(playlists));
};
