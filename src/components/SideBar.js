import React from 'react';
import styled from 'styled-components';

import AddPlaylistButton from './AddPlaylistButton';
import Library from './Library';
import Logo from './Logo';

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 300px;
  background-color: #008B95;
`;

const SideBar = () =>
  <StyledSideBar>
    <Logo />
    <Library />
    <AddPlaylistButton />
  </StyledSideBar>;

export default SideBar;
