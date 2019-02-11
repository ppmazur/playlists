import { combineReducers } from 'redux';

import playlists from './playlists';
import songs from './songs';

const playlistsApp = combineReducers({
  playlists,
  songs,
});

export default playlistsApp;
