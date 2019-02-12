import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addPlaylist } from '../../actions';

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  display: inline;
  width: auto;
  padding: 10px 15px;
  border: inherit;
  background-color: #00979c;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

const Button = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #00979c;
  }
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
    <Wrapper>
      <Input
        value={name}
        onChange={handleChange}
        autoFocus={true}
      />
      <Button onClick={onComplete}>
        &#10007;
      </Button>
      <Button onClick={handleConfirm}>
        &#10004;
      </Button>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addPlaylist: name => {
    dispatch(addPlaylist(name));
  },
});

export default connect(null, mapDispatchToProps)(PlaylistName);
