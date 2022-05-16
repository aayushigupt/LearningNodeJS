const express = require('express')
const mysql = require('mysql')

//Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

//Connect with mysql
db.connect((err) => {
    if(err) {
        throw err;
    } 

    console.log("MY SQL Connected");
});

const app = express();

//Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodejs';
    db.query(sql, (err) => {
        if(err) {
            throw err;
        } 

        res.send('Database Created')
    });
});

app.listen('3000', () => {
    console.log('Server started')
});   