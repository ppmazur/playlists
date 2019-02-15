import React from 'react';
import renderer from 'react-test-renderer';

import { Track } from './Track';
import Button from './commons/Button';

describe('<Track />', () => {
  const mockedTrack = {
    artist: 'artist name',
    duration: 123123,
    id: 'id1',
    title: 'title test',
    tracks: [],
  };
  const openModal = jest.fn();
  beforeEach(() => {
    openModal.mockClear();
  });

  it('matches the Track snapshot', () => {
    const result = renderer
      .create(<Track
        openPlaylistsModal={openModal}
        track={mockedTrack}
      />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('calls openPlaylistModal on button click', () => {
    const result = renderer
      .create(<Track
        openPlaylistsModal={openModal}
        track={mockedTrack}
      />);
    result.root.findByType(Button).props.onClick();
    expect(openModal).toHaveBeenCalledWith(mockedTrack.id);
  });
});
