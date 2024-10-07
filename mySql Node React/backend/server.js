const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signupdb",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ err });
    }
    return res.json(data);
  });
});
//req.email
//req.password
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE (`name`)"
})

app.listen(8081, () => {
  console.log("listening");
});
