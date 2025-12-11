import { format, addHours, getISOWeek, startOfWeek, endOfWeek } from 'date-fns';

const dateParser = ({ date, utcOffset = true }) => {
  const offset = utcOffset ? new Date(date).getTimezoneOffset() / 60 : 0;
  const eventDate = addHours(date, offset);
  return {
    date: { value: eventDate, size: '', parent: null },
    dateString: {
      value: format(eventDate, 'yyyy-MM-dd'),
      size: '',
      parent: null,
    },
    day: { value: eventDate.getDate(), size: '', parent: 'monthString' },
    dayOfWeek: {
      value: `${format(eventDate, 'EEEE')}s`,
      size: '',
      parent: 'monthString',
    },
    month: { value: eventDate.getMonth() + 1, size: '', parent: 'year' },
    monthString: { value: format(eventDate, 'LLLL'), size: '', parent: 'year' },
    year: { value: eventDate.getFullYear(), size: '', parent: null },
    weekNumber: {
      value: getISOWeek(eventDate),
      size: '',
      parent: 'monthString',
    },
    weekString: {
      value: `week of ${format(
        startOfWeek(eventDate),
        'MM-dd'
      )} \u2014 ${format(endOfWeek(eventDate), 'MM-dd')}`,
      size: '',
      parent: 'monthString',
    },
  };
};

export default dateParser;
