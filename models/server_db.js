const db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject) => {
  db.query('INSERT INTO lottery_information SET ?', data, function(err, results, fields){
    if(err){
      reject('failure');
    }
    resolve('successful');
  })
})

get_total_amount = (data) => new Promise((resolve, request) => {
  db.query('SELECT SUM(amount) as total_amount FROM lottery_information', null, function(err, results, fields){
    if(err) {
      reject('failure')
    }
    resolve(results)
  });
})

module.exports = {
  save_user_information
}
