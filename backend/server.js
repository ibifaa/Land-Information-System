const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

app = express();
app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "oims"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";

    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("No Record")
        }
    })
})

app.post('/land-info', (req, res) => {
    const insertSql = "INSERT INTO land-info(Name, State, LGA, number, location, date) VALUES(??????)";

    db.query(insertSql, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("No Record")
        }
    })
})

app.listen(8081, () => {
    console.log("Listening...");
})