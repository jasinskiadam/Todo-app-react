import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Neon>TO DO APP REACT</Neon>
    </Wrapper>
  );
};

const neon = keyframes` 0% {
  text-shadow: -1px -1px 1px var(--white), -1px 1px 1px var(--white), 1px -1px 1px var(--white), 1px 1px 1px var(--white),
  0 0 3px var(--white), 0 0 10px var(--white), 0 0 20px var(--white),
  0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
}
50% {
  text-shadow: -1px -1px 1px var(--white), -1px 1px 1px var(--white), 1px -1px 1px var(--white), 1px 1px 1px var(--white),
  0 0 5px var(--white), 0 0 15px var(--white), 0 0 25px var(--white),
  0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 80px var(--shadow-color), 0 0 110px var(--shadow-color), 0 0 210px var(--shadow-color);
}
100% {
  text-shadow: -1px -1px 1px var(--white), -1px 1px 1px var(--white), 1px -1px 1px var(--white), 1px 1px 1px var(--white),
  0 0 3px var(--white), 0 0 10px var(--white), 0 0 20px var(--white),
  0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
}`;

const Wrapper = styled.header`
  width: 70vw;
  height: 15vh;
`;

const Neon = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 30px;
  color: var(--white);
  animation: ${neon} 3s infinite;
`;

export default Header;
