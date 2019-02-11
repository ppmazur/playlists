import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LibraryItem from './LibraryItem';

const StyledList = styled.div`
  display: flex;
`;

const Library = ({ playlists }) =>
  <StyledList>
    {playlists.map(playlist =>
      <LibraryItem
        key={playlist}
        playlistId={playlist}
      />
    )}
  </StyledList>;

const mapStateToProps = state => ({
  playlists: state.playlists.allIds,
});

export default connect(mapStateToProps)(Library);
