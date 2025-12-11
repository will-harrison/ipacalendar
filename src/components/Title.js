import styled from 'styled-components';

const Title = styled.div`
  font-family: 'avenir next', avenir, sans-serif;
  font-size: ${({ size }) => size || '3rem'};
  opacity: 0.8;
`;

export default Title;
