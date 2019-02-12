import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addPlaylist } from '../../actions';


const Inputs = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 10px;
`;

const CancelBtn = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const ConfirmBtn = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const PlaylistName = ({ addPlaylist, onComplete }) => {
  const [name, setName] = useState('');
  const handleChange = event => {
    setName(event.target.value);
  };
  const handleConfirm = () => {
    addPlaylist(name);
    onComplete();
  };
  return (
    <Inputs>
      <Input
        value={name}
        onChange={handleChange}
        autoFocus={true}
      />
      <CancelBtn onClick={onComplete}>
        &#10007;
      </CancelBtn>
      <ConfirmBtn onClick={handleConfirm}>
        &#10004;
      </ConfirmBtn>
    </Inputs>
  );
};

const mapDispatchToProps = dispatch => ({
  addPlaylist: name => {
    dispatch(addPlaylist(name));
  },
});

export default connect(null, mapDispatchToProps)(PlaylistName);
