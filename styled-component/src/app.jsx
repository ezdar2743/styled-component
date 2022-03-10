import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
display: flex;
`;
const animation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  transform:rotate(360deg);
  border-radius: 100px;
}
100%{
  transform: rotate(0deg);
  border-radius: 0px;
}
`;
const Box = styled.div`
width: 200px;
height: 200px;
background-color: tomato;
animation:${animation} 3s linear infinite;
display: flex;
justify-content: center;
align-items: center;
span{
  font-size: 36px;
  &:hover{
  font-size: 40px;
  }
  &:active{
    opacity: 50%;
  }
}
`;

const App = () => {
  return (
    <Container>
        <Box>
          <span> 🙃</span>
          </Box>
    </Container>
  );
};

export default App;