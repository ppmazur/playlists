import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SimplePlaylist from './SimplePlaylist';
import { setActivePlaylist } from '../actions';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80%;
  overflow-y: auto;
`;

const Library = ({ activePlaylist, playlists, setActivePlaylist }) =>
  <StyledList>
    {playlists.map(playlist =>
      <SimplePlaylist
        isActive={playlist === activePlaylist}
        key={playlist}
        onClick={setActivePlaylist}
        playlistId={playlist}
      />
    )}
  </StyledList>;

Library.propTypes = {
  activePlaylist: PropTypes.string.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActivePlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  playlists: state.playlists.allIds,
  activePlaylist: state.playlists.activePlaylist,
});

const mapDispatchToProps = dispatch => ({
  setActivePlaylist: playlistId => dispatch(setActivePlaylist(playlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
