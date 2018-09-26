const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db.js');

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server running at port 3000')
})

app.post('/', async (req, res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  if (amount <= 1) {
    return_info = new Object();
    return_info.error = true;
    return_info.message = 'The amount should be greater than 1';

    res.send(return_info);
  }
  console.log('correct amount')
  var result = await save_user_information({'email' : email ,'amount' : amount});
  res.send(result)
  //res.send({'email' : email ,'amount' : amount})
});

app.get('/', (req, res) => {
  res.send('root')
})
