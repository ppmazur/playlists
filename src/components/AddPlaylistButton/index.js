import React, { useState } from 'react';
import styled from 'styled-components';

import PlaylistName from './PlaylistName';

const Button = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  &:hover {
    background-color: #00979c;
  }
`;

const AddPlaylistButton = () => {
  const [isActive, setIsActive] = useState(false);
  return isActive ?
    <PlaylistName
      onComplete={() => setIsActive(false)}
    /> :
    <Button
      onClick={() => setIsActive(!isActive)}
    >
      Add new playlist...
    </Button>;
};

export default AddPlaylistButton;
