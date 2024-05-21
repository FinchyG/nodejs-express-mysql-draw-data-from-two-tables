module.exports = (app) => {
  const loginChecker = require('../controllers/loginChecker.controller.js');

  // Retrieve all football club and home ground details
  app.get('/footballClubs', loginChecker.getAllFootballClubs);

}