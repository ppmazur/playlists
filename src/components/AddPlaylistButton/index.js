import React, { useState } from 'react';

import PlaylistName from './PlaylistName';
import Button from '../commons/Button';

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
