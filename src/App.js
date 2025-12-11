import { useState } from 'react';
import styled from 'styled-components';
import dateParser from './utils/dateParser';
import Event from './components/Event';
import Month from './components/Month';
import Row from './components/Row';
import Column from './components/Column';
import Header from './components/Header';
import events from './events';

function App() {
  const [grouper, setGrouper] = useState('monthString');
  const [range, setRange] = useState(['2025-12-01', '2026-01-31']);

  const withDt = events
    .filter((f) => f.date >= range[0] && f.date <= range[1])
    .map((e) => ({
      ...e,
      dt: dateParser({ date: e.date }),
    }))
    .toSorted((a, b) => a?.dt?.date?.value - b?.dt?.date?.value);

  const parents = Object.entries(
    Object.groupBy(withDt, (e) => e.dt[e.dt[grouper].parent].value)
  ).map((m) => m);
  const grouped = Object.groupBy(withDt, (e) => e.dt[grouper].value);
  const mapped = Object.entries(grouped).map((m) => m);

  return (
    <Container>
      <Header />
      <CenterEvent>
        {mapped.map((m) => {
          return (
            <div key={m.id}>
              <Month>{m[0]}</Month>
              <EventRow>
                {m[1].map((e) => (
                  <Event event={e} />
                ))}
              </EventRow>
            </div>
          );
        })}
      </CenterEvent>
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
  @media print {
    min-height: 100%;
    @page {
      size: A4 portrait;
      height: 100%; /* Sets page size to A4 in portrait orientation */
      /* or */
      /* size: 8.5in 11in; Sets page size to Letter (width x height) */
    }
  }
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
