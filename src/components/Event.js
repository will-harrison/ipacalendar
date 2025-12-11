import styled from 'styled-components';
import Day from './Day';
import Attraction from './Attraction';
import Details from './Details';
import Time from './Time';
import Column from './Column';

const Event = ({ event }) => {
  const { dt, attraction, time, details } = event;

  return (
    <Column>
      <Day>{dt.day.value}</Day>
      <Offset>
        <Attraction>
          {attraction.map((a) => (
            <div>{a}</div>
          ))}
        </Attraction>
        <Time>{time}</Time>
        <Details>
          {details.map((d) => (
            <div>{d}</div>
          ))}
        </Details>
      </Offset>
    </Column>
  );
};

const Offset = styled.div`
  font-family: 'avenir next', avenir, sans-serif;
  margin-top: -2.5rem;
  margin-left: 3rem;
`;

export default Event;
