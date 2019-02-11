import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyle from '../theme/globalStyle';

const AppWrapper = styled.div`
  text-align: left;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <StyledHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </StyledHeader>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
