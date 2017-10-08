const dateConverter = (date) => {
  const newDate = date.split('-');
  const month = newDate[1];
  const day = newDate[2].slice(0, 2);
  return monthSwitch(month) + ' ' + day;
};

const monthSwitch = (str) => {
  switch (str) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return 'January';
  }
};

module.exports = dateConverter;
