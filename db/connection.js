const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'Tyler',
      // Your MySQL password
      password: 'Knallion90',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;
