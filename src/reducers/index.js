import { combineReducers } from 'redux';

import playlists from './playlists';
import tracks from './tracks';

const playlistsApp = combineReducers({
  playlists,
  tracks,
});

export default playlistsApp;
