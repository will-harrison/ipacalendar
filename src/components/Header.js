import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import Title from './Title';

const Header = () => {
  return (
    <Container>
      <Location>
        <Cal>Calendar of Events</Cal>
      </Location>
      <Location>
        <Img src="/ipaTransparent.png" />
      </Location>
      <Location>
        <Cal>203 Cedar St.</Cal>
        <Cal>Downtown Sandpoint</Cal>
      </Location>
    </Container>
  );
};

const Container = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem 3rem;
`;

const Location = styled(Column)`
  justify-content: flex-end;
  align-items: flex-end;
`;

const Img = styled.img`
  height: 150px;
  width: 170px;
  margin-top: 1rem;
`;

const Cal = styled(Title)`
  font-size: 2rem;
`;

// const Header = styled(Row)`
//   justify-content: flex-start;
//   align-items: center;
//   gap: 4rem;
// `;

export default Header;
