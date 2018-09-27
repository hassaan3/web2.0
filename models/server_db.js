const db = require('../db.js');

var save_user_information = (data) => new Promise((resolve, reject) => {
  db.query('INSERT INTO lottery_information SET ?', data, function(err, results, fields){
    if(err){
      reject('failure');
    }
    resolve('successful');
  })
})

var get_total_amount = (data) => new Promise((resolve, request) => {
  db.query('SELECT SUM(amount) as total_amount FROM lottery_information', null, function(err, results, fields){
    if(err) {
      reject('failure')
    }
    resolve(results)
  });
})

var get_list_of_participants = (data) => new Promise((resolve, request) => {
  db.query('SELECT Email FROM lottery_information', null, function(err, results, fields){
    if(err) {
      reject('failure')
    }
    resolve(results)
  });
})

module.exports = {
  save_user_information,
  get_total_amount,
  get_list_of_participants
}
