import { format, addHours, getISOWeek, startOfWeek, endOfWeek } from 'date-fns';

const dateParser = ({ date, utcOffset = true }) => {
  const offset = utcOffset ? new Date(date).getTimezoneOffset() / 60 : 0;
  const eventDate = addHours(date, offset);
  return {
    date: eventDate,
    dateString: format(eventDate, 'yyyy-MM-dd'),
    day: eventDate.getDate(),
    dayOfWeek: format(eventDate, 'EEEE'),
    month: eventDate.getMonth() + 1,
    monthString: format(eventDate, 'LLLL'),
    year: eventDate.getFullYear(),
    weekNumber: getISOWeek(eventDate),
    weekString: `week of ${format(
      startOfWeek(eventDate),
      'MM-dd'
    )} \u2014 ${format(endOfWeek(eventDate), 'MM-dd')}`,
  };
};

export default dateParser;
