var mysql = require('mysql');
var db_config = {
  host: 'localhost',
  user: 'root',
  password: 'OBCCpassword',
  database: 'webapp'
}

function handleDisconnect() {
  connection = mysql.createConnection(db_config);
  connection.connect((err) => {
    if (err) {
      console.error('error connecting to db: ', err);
      setTimeout(handleDisconnect, 2000);
    }

    console.log('connection established');
  });

  connection.on('error', (err) => {
    if(err.code == 'PROTOCOL_CONNECTION_LOST')
      handleDisconnect();
    else
      throw err;
  });
}

handleDisconnect();

module.exports = connection;
