import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import Modal from './AssignPlaylistModal';
import SideBar from './SideBar';
import Playlist from './Playlist';

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SideBar />
        <Playlist />
        <Modal/>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
