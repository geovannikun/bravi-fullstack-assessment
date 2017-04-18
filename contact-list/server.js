let sqlite3 = require('sqlite3').verbose();
let express = require('express');
let path = require('path')

let app = express();
let db = new sqlite3.Database('./database/contact-list.db');

app.get("/", (req, res) => {
    res.json({})
})

app.listen(8080, () => {
    console.log("Running at port 8080");
})
