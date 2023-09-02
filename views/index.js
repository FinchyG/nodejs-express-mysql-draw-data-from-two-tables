// Execute in strict mode
"use strict";

// Declare a loginChecker object for use by the HTML view
var controller;

// Variable to store API base URL
var BASE_URL = 'http://localhost:4000/twoTables/';

// variables to store references to html tables
var clubsTable = document.getElementById("clubsTable");
var groundsTable = document.getElementById("groundsTable");
var allDataTable = document.getElementById("allDataTable");
        
window.addEventListener("load", () => {
// Create the TwoTables object for use by the HTML view
controller = new TwoTables();
            });
function TwoTables() {

  // Functions to return model data

  function getClubsData() {
    
    function onSuccess(data) {
      
      // check that data has been received and then display in html table
      if (data) {
      // Calculate number of needed rows for amount of football clubs
        let numOfRows = data.length;

        // Create a new row for each football club, displaying its name and nickname
        for (let i = 0; i < numOfRows; i++) {
          let newRow = clubsTable.insertRow(clubsTable.rows.length);
          let cell1 = newRow.insertCell(0);
          let cell2 = newRow.insertCell(1);
        
          cell1.innerHTML = data[i].clubName;
          cell2.innerHTML = data[i].nickname;
        }
      } else {
          alert("No clubs data found.");
      }
    }

    let URL = BASE_URL + 'footballClubs';
    console.log(URL);
    $.ajax(URL, {type: "GET", success: onSuccess},
           );
    }
    
    function getGroundsData() {

    function onSuccess(data) {
      
      // check that data has been received and then display in html table
      if (data) {
      // Calculate number of needed rows for amount of football clubs
        let numOfRows = data.length;

        // Create a new row for each football club, displaying its name and nickname
        for (let i = 0; i < numOfRows; i++) {
          let newRow = groundsTable.insertRow(groundsTable.rows.length);
          let cell1 = newRow.insertCell(0);
          let cell2 = newRow.insertCell(1);
        
          cell1.innerHTML = data[i].ground_name;
          cell2.innerHTML = data[i].capacity;
        }
      } else {
          alert("No clubs data found.");
      }
    }

    let URL = BASE_URL + 'homeGrounds';
    console.log(URL);
    $.ajax(URL, {type: "GET", success: onSuccess},
           );      
    }    
    
    function getAllData() {
      
      function onSuccess(data) {
        // check that data has been received and then display in html table
        if (data) {
          // Calculate number of needed rows for amount of football clubs
          let numOfRows = data.length;

          // Create a new row for each football club, displaying its name and nickname
          for (let i = 0; i < numOfRows; i++) {
            let newRow = allDataTable.insertRow(clubsTable.rows.length);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            
            cell1.innerHTML = data[i].clubName;
            cell2.innerHTML = data[i].nickname;
            cell3.innerHTML = data[i].groundName;
            cell4.innerHTML = data[i].capacity;
          }
        } else {
          alert("No clubs data found.");
        }
      }
      
      let URL = BASE_URL;
      $.ajax(URL, {type: "GET", success: onSuccess},
             );
    }

    // CONTROLLER FUNCTIONS

    this.viewClubsData = function () {
      getClubsData();
    };

    this.viewGroundsData = function () {
      getGroundsData();
    };  
  
    this.viewAllData = function () {
      getAllData();
    };
    
}