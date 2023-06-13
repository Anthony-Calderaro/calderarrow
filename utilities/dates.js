
export function formatDatesForSearching(numericDate) {
  const dateString = numericDate.toString();
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6);
  const date = new Date(year, month - 1, day);
  const monthString = date.toLocaleString('default', { month: 'long' });
  
  // Month YYYY
  return `${monthString} ${date.getFullYear()}`
}
