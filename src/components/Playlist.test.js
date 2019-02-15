import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Playlist } from './Playlist';

describe('<Playlist />', () => {
  it('renders playlist title', () => {
    const mockedPlaylist = {
      name: 'test name',
      id: 'id1',
      tracks: [],
    };
    const renderer = new ShallowRenderer();
    const result = renderer
      .render(<Playlist playlist={mockedPlaylist}/>);
    expect(result.props.children[0].props.children).toBe(mockedPlaylist.name);
  });

  it('renders appropriate number of Track components', () => {
    const mockedPlaylist = {
      name: 'test name',
      id: 'id1',
      tracks: ['1', '2', '3'],
    };
    const renderer = new ShallowRenderer();
    const result = renderer
      .render(<Playlist playlist={mockedPlaylist}/>);
    expect(result.props.children[1].length).toBe(3);
  });
});
