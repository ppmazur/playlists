import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    color: #f7f7f7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;
