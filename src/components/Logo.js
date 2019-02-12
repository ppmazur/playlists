import React from 'react';
import styled from 'styled-components';

import noteImage from '../logo.png';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Image = styled.img`
  width: 100px;
`;

const Text = styled.span`
  font-size: 26px;
`;

const Logo = () =>
  <StyledLogo>
    <Image src={noteImage} alt="Playlists App" />
    <Text>Playlists App</Text>
  </StyledLogo>;

export default Logo;
