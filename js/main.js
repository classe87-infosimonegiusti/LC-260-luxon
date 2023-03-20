//https://moment.github.io/luxon/#/

const DateTime = luxon.DateTime;


const { createApp } = Vue

createApp({
  data() {
    return {
      message: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
    }
  }
}).mount('#app')
