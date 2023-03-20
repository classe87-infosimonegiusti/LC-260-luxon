const DateTime = luxon.DateTime;

const dataOraInItaliano = DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)

console.log(dataOraInItaliano);