module.exports = (app) => {
  const twoTables = require('../controllers/twoTables.controller.js');

  // retrieve all football club and home ground details
  app.get('/twoTables', twoTables.getAll);
  
  // retrieve and return all football club details
  app.get('/twoTables/footballClubs', twoTables.getAllFootballClubs);

  // retrieve and return all football club details
  app.get('/twoTables/homeGrounds', twoTables.getAllHomeGrounds);

}