import { format } from 'date-fns';

export function formatDate (date) {
  if (typeof date == "object") {
    date = format(date, 'MM/dd/yyyy');
  } else {
    date = format(new Date(date.replace(/-/g, '/')), 'MM/dd/yyyy');
  }
  return date;
}