import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Library from '../containers/LibraryContainer';

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background: aliceblue;
  border-right: 1px solid darkgrey;
`;

const SideBar = () =>
  <StyledSideBar>
    <Logo />
    <Library />
  </StyledSideBar>;

export default SideBar;
