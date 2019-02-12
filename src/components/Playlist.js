import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Track from './Track';

const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: #008B95;
  border: 30px solid #E37222;
`;

const Title = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: large;
`;

const Playlist = ({ playlist }) =>
  <StyledPlaylist>
    <Title>{playlist.name}</Title>
    {playlist.tracks.map((track, index) =>
      <Track
        index={index + 1}
        key={track}
        trackId={track}
      />
    )}
  </StyledPlaylist>;

const mapStateToProps = state => ({
  playlist: state.playlists.byId[state.playlists.activePlaylist],
});

export default connect(mapStateToProps)(Playlist);
