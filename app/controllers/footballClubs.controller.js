const mysql = require('mysql2');

// connection configurations
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'OdoDS9Warf!Tuvok?',
  database: 'twoTableDemo'
});

// connect to database
connection.connect(function (err) {
  if (err)
    throw err
  console.log('You are now connected with mysql database...')
})

// Retrieve and return all football club details
exports.getAll = (req, res) => {
  connection.query('SELECT clubName, nickname FROM footballClubs;',
          function (error, results, fields) {
            if (error)
              throw error;
            res.json(results);
          });
};