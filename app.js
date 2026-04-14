const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql-nodejs-render-aiven-lab-mysql-lab4-caturan.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_Fvc1IPNg8zIOpLPQCeO",
  database: "defaultdb",
  port: "21297"
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if(err) throw err;
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
