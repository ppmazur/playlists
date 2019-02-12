import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LibraryItem from './LibraryItem';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80%;
  overflow-y: auto;
`;

const Library = ({ activePlaylist, playlists }) =>
  <StyledList>
    {playlists.map(playlist =>
      <LibraryItem
        key={playlist}
        playlistId={playlist}
        isActive={playlist === activePlaylist}
      />
    )}
  </StyledList>;

const mapStateToProps = state => ({
  playlists: state.playlists.allIds,
  activePlaylist: state.playlists.activePlaylist,
});

export default connect(mapStateToProps)(Library);
