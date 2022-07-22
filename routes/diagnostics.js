const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  // fetch('http://localhost:3001/api/feedback', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newFeedback),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       alert(data.status);
  //       email = '';
  //       feedback = '';
  //     });
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

});

module.exports = diagnostics;
