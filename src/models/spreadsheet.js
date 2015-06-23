import Model from 'ampersand-model'

export default Model.extend({
  url: 'https://spreadsheets.google.com/feeds/',

  ajaxConfig () {
    return {
      headers: {
        Authorization: 'key=AIzaSyB2ISWvgHUGV_wR2JIHmJXCLQ2Ms7aGhzc'
      }
    }
  }
})