const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server running at port 3000')
})

app.post('/', (req, res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  if (amount <= 1) {
    return_info = new Object();
    return_info.error = true;
    return_info.message = 'The amount should be greater than 1';

    res.send(return_info);
  }

  res.send({'email' : email ,'amount' : amount})
})

app.get('/', (req, res) => {
  res.send('root')
})
