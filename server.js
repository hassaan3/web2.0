const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
  save_user_information,
  get_total_amount,
  get_list_of_participants
} = require('./models/server_db.js');
const path = require('path')
const publicPath = path.join(__dirname, './public')

app.use(bodyParser.json());
app.use(express.static(publicPath));

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
  res.send(result);
});

app.get('/get_total_amount', async (req, res) =>{
  console.log('get total amount');
  var result = await get_total_amount();
  res.send(result);
});

app.get('/pick_winner', async (req, res) => {
  var result = await get_total_amount();
  var total_amount = result[0].total_amount;
  result = await get_list_of_participants();
  var list_of_participants = JSON.parse(JSON.stringify(result));
  var participants = [];
  list_of_participants.forEach(function (element){
    participants.push(element.email);
  });
  console.log(participants);
  //var list_of_participants = JSON.parse(JSON.stringify(list_of_participants));
  //console.log(list_of_participants);
  //res.send(list_of_participants);
});

app.get('/', (req, res) => {
  res.send('root')
})
