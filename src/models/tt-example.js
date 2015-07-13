var Tabletop = require('tabletop')

function cb (data, tabletop) {
  return data
}

function init () {
  var result = Tabletop.init({ key: '153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8',
    callback: cb,
  simpleSheet: true })
  return result
}

module.exports = init
