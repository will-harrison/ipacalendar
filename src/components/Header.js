import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import Title from './Title';
import ipaTransparent from '../ipaTransparent.png';

const Header = () => {
  return (
    <Container>
      <Location>
        <Title size="2rem">Calendar of Events</Title>
      </Location>
      <Location>
        <Img src={ipaTransparent} />
      </Location>
      <Location>
        <Title size="2rem">203 Cedar St.</Title>
        <Title size="2rem">Downtown Sandpoint</Title>
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

export default Header;
