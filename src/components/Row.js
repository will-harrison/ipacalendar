import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || '1rem'};
`;

export default Row;
