var Sheet = require('google-spreadsheet')
var workshop = new Sheet('153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8')

function data (row, cb) {
  workshop.getRows(row, function (err, sheet) {
    if (err) {
      cb(err)
    }
    cb(sheet)
  })
}

module.exports = data