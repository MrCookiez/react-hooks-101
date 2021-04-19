import moment from 'moment';

export const getBirthdateAndAge = (date) => {
  const newDate = moment(date).format("MM-DD-YYYY");
  const yearsOld = moment(newDate, "MM-DD-YYYY").fromNow().split(" ")[0];
  return `${newDate} (${yearsOld})`;
}
