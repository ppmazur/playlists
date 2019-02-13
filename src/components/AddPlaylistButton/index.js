import React, { useState } from 'react';

import PlaylistName from './PlaylistName';
import { Button } from '../common';

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
