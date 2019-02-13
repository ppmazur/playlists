import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import GlobalStyle from '../theme/globalStyle';
import Modal from './AssignPlaylistModal';
import SideBar from './SideBar';
import Playlist from './Playlist';
import { fetchPlaylists } from '../actions';
import PropTypes from 'prop-types';

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const App = ({ getPlaylists }) => {
  useEffect(() => {
    getPlaylists();
  });
  return (
    <AppWrapper>
      <SideBar />
      <Playlist />
      <Modal/>
      <GlobalStyle />
    </AppWrapper>
  );
};

App.propTypes = {
  getPlaylists: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(null, mapDispatchToProps)(App);
