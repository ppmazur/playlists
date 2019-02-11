import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  background: burlywood;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background: #b99367;
  }
`;

const LibraryItemContainer = ({ playlist }) =>
  <StyledRow>
    {playlist.id} {playlist.name} {playlist.songs.length}
  </StyledRow>;

const mapStateToProps = (state, { playlistId }) => ({
  playlist: state.playlists.byId[playlistId],
});

export default connect(mapStateToProps)(LibraryItemContainer);
