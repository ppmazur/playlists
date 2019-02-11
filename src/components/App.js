import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import GlobalStyle from '../theme/globalStyle';

const AppWrapper = styled.div`
  text-align: left;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
