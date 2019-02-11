import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { parseDuration } from '../helpers/track';

const StyledTrack = styled.div`
  display: flex;
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

const Track = ({ index, track }) =>
  <StyledTrack>
    {index})
    <Artist>{track.artist}</Artist>
    <TrackName>{track.title}</TrackName>
    <Duration>{parseDuration(track.duration)}</Duration>
  </StyledTrack>;

const mapStateToProps = (state, { trackId }) => ({
  track: state.tracks.byId[trackId],
});
export default connect(mapStateToProps)(Track);
