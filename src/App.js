import styled from 'styled-components';
import dateParser from './utils/dateParser';
import Event from './components/Event';
import Month from './components/Month';
import Row from './components/Row';
import Column from './components/Column';
import Header from './components/Header';
import NewBooking from './components/NewBooking';

const events = [
  {
    date: '2025-09-15',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7pm',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
  {
    date: '2025-09-17',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7pm',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
  {
    date: '2025-09-18',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7pm',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
  {
    date: '2025-09-19',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7pm',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
  {
    date: '2025-10-01',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7PM - 9PM',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
  {
    date: '2025-10-10',
    attraction: [
      'TACOS!',
      'Utara Tap Takeover',
      'Kiniksu Land Trust Fundraiser',
    ],
    time: '7pm',
    details: ['Carne Guisada', '$15 cover charge', 'Merch available'],
  },
];

function App() {
  const withDt = events.map((e) => ({
    ...e,
    dt: dateParser({ date: e.date }),
  }));

  const grouper = 'monthString';

  const grouped = Object.groupBy(withDt, (e) => e.dt[grouper]);
  // const ordered = grouped.toSorted((a, b) => a.date - b.date);
  const mapped = Object.entries(grouped).map((m) => m);

  return (
    <Container>
      <Header />
      <CenterEvent>
        {mapped.map((m) => {
          return (
            <>
              <Month>{m[0]}</Month>
              <EventRow>
                {m[1].map((e) => (
                  <Event event={e} />
                ))}
              </EventRow>
            </>
          );
        })}
      </CenterEvent>
      <NewBooking />
    </Container>
  );
}

const Container = styled.div`
  background: #2a2d3e;
  background: linear-gradient(
    90deg,
    rgba(42, 45, 62, 1) 0%,
    rgba(71, 72, 90, 1) 50%,
    rgba(42, 45, 62, 1) 100%
  );
  color: white;
  padding: 1rem 4rem;
`;

// const Header = styled(Row)`
//   justify-content: flex-start;
//   align-items: center;
//   gap: 4rem;
// `;

const CenterEvent = styled(Column)`
  justify-content: center;
`;

const EventRow = styled(Row)`
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
`;

export default App;
