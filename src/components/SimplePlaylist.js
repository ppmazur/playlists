import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setActivePlaylist } from '../actions';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ isActive }) => isActive ? '#E37222' : '#008B95'};
  padding: 0 15px;
  min-height: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive }) => isActive ? '#E37222' : '#00979c'};
    cursor: pointer;
  }
`;

const SimplePlaylist = ({ isActive, playlist, onClick }) =>
  <StyledRow
    isActive={isActive}
    onClick={() => !isActive && onClick(playlist.id)}
  >
    {playlist.name}
  </StyledRow>;

const mapStateToProps = (state, { playlistId }) => ({
  playlist: state.playlists.byId[playlistId],
});

export default connect(mapStateToProps)(SimplePlaylist);
