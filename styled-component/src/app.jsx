import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
display: flex;
`;
const Btn = styled.button`
  color: ghostwhite;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({required : true, maxLength:10}) `
background-color: tomato;
`;

const App = () => {
  return (
    <Father>
        <Btn>log in</Btn>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
    </Father>
  );
};

export default App;