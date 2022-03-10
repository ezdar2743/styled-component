import React from 'react';
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
color: ${(props)=> props.theme.textColor};
`;
const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vh;
justify-content: center;
align-items: center;
background-color:${(props)=>props.theme.backgroundColor} ;
`;

const App = () => {
  return (
    <Wrapper>
    <Title>Hellow</Title>
    </Wrapper>
  );
};

export default App;