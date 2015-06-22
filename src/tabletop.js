import {init} from 'tabletop'

function showInfo (data) {
  console.log(data)
  return data
}

export default init({
  key: 'https://docs.google.com/spreadsheets/d/153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8/pubhtml?gid=291196347&single=true',
  callback: showInfo,
  simpleSheet: true
})