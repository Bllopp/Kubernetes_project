require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
   port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'db_project'
});

module.exports = {connection}

connection.connect((err) => {
    if (err) {
        console.log('Database connection failed. ' + err.message)
    } else {
        console.log('Database connected.')
    }
});

connection.on('error', function(err) {
    console.log("[mysql error]",err);
  });



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

