import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Playlist from './PlaylistContainer';

const StyledList = styled.div`
  display: flex;
`;

const PlaylistsContainer = ({ playlists }) =>
  <StyledList>
    {playlists.map(playlist =>
      <Playlist
        key={playlist}
        playlistId={playlist}
      />
    )}
  </StyledList>;

const mapStateToProps = state => ({
  playlists: state.playlists.allIds,
});

export default connect(mapStateToProps)(PlaylistsContainer);
