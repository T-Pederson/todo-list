import { format } from 'date-fns';

export function formatDate (unformattedDate) {
  const formattedDate = format(new Date(unformattedDate.replace(/-/g, '/')), 'MM/dd/yyyy');
  return formattedDate;
}