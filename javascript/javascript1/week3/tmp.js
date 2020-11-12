const toDate = new Intl.DateTimeFormat();
const formatDate = toDate.formatToParts();
const date = (formatDate[0].value + '/' + formatDate[2].value + '-' + formatDate[4].value);
console.log(date + typeof date)