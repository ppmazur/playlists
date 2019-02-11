import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import SideBar from './SideBar';

const AppWrapper = styled.div`
  text-align: left;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <SideBar />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
