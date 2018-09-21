const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('server running at port 3000')
})

app.post('/', (req, res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  res.send({'email' : email ,'amount' : amount})
})

app.get('/', (req, res) => {
  res.send('root')
})
