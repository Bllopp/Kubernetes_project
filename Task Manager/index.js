const express = require('express');
const app = express();

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
        console.log('Database Task manager connection failed.' + err.message)
    } else {
        console.log('Database Task manager connected.')
    }
});

app.use('/tasks', require('./tasks/tasks.routing'));

const port = process.env.NODE_ENV === 'production' ? 80 : 4040;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


