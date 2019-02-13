import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SimplePlaylist from './SimplePlaylist';
import { Button } from './common';
import {
  addTrackToPlaylist,
  closePlaylistsModal,
} from '../actions';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  background-color: #008B95;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Modal = ({ addTrack, closeModal, playlists, trackToAdd }) => {
  return trackToAdd &&
    <ModalWrapper>
      <StyledModal>
        <h3>Add <i>{trackToAdd.title}</i> to playlist:</h3>
        {playlists.map(playlist =>
          <SimplePlaylist
            key={playlist}
            playlistId={playlist}
            onClick={() => addTrack(playlist, trackToAdd.id)}
          />
        )}
        <CloseButton onClick={closeModal}>
          &#10006;
        </CloseButton>
      </StyledModal>
    </ModalWrapper>;
};

Modal.propTypes = {
  addTrack: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.string),
  trackToAdd: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ playlists, tracks }) => ({
  playlists: playlists.allIds.filter(id => id !== playlists.activePlaylist),
  trackToAdd: playlists.trackToAdd && tracks.byId[playlists.trackToAdd],
});

const mapDispatchToProps = dispatch => ({
  addTrack: (playlistId, trackId) => dispatch(addTrackToPlaylist(playlistId, trackId)),
  closeModal: () => dispatch(closePlaylistsModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
