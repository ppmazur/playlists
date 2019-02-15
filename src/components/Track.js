import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { openPlaylistsModal } from '../actions';
import { parseDuration } from '../helpers/track';
import Button from './commons/Button';

const StyledTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: medium;
`;

const Artist = styled.span`
  font-weight: bold;
`;

const TrackName = styled.span`
  font-style: italic;
`;

const Duration = styled.span`
  font-weight: lighter;
`;

export const Track = ({ index, openPlaylistsModal, track }) =>
  <StyledTrack>
    {index})
    <Artist>{track.artist}</Artist>
    <TrackName>{track.title}</TrackName>
    <Duration>{parseDuration(track.duration)}</Duration>
    <Button
      onClick={() => openPlaylistsModal(track.id)}
    >
      &#10010;
    </Button>
  </StyledTrack>;

Track.propTypes = {
  index: PropTypes.number,
  openPlaylistsModal: PropTypes.func.isRequired,
  track: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, { trackId }) => ({
  track: state.tracks.byId[trackId],
});

const mapDispatchToProps = dispatch => ({
  openPlaylistsModal: trackId => dispatch(openPlaylistsModal(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);
