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

// retrieve and return all football club and home ground details
exports.getAll = (req, res) => {
  connection.query('SELECT clubName, nickname, groundName, capacity FROM \n\
footballClubs, homeGrounds WHERE footballClubs.home_ground=homeGrounds.id;',
          function (error, results, fields) {
            if (error)
              throw error;
            res.json(results);
          });
};

// retrieve and return all football club details
exports.getAllFootballClubs = (req, res) => {

    connection.query('SELECT clubName, nickname FROM footballClubs;',
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
};

// retrieve and return all home ground details
exports.getAllHomeGrounds = (req, res) => {

    connection.query('SELECT groundName, capacity FROM homeGrounds;',
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
};