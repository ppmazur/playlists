import React, { useState } from 'react';
import styled from 'styled-components';

import PlaylistName from './PlaylistName';

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: medium;
  cursor: pointer;
`;

const AddPlaylistButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    isActive ?
      <PlaylistName onComplete={() => setIsActive(false)} /> :
      <Button onClick={() => setIsActive(!isActive)}>
        &#43; Add playlist
      </Button>
  );
};

export default AddPlaylistButton;
