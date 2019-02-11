import { combineReducers } from 'redux';

import artists from './artists';
import playlists from './playlists';
import songs from './songs';

const playlistsApp = combineReducers({
  artists,
  playlists,
  songs,
});

export default playlistsApp;
