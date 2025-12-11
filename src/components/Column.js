import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '1rem'};
`;

export default Column;
