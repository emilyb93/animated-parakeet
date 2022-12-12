const express = require("express");
const db = require("./db/connection");

const app = express();

app.get("/api/lesson", (req, res) => {
  db.query("SELECT * FROM lessons_content").then(({ rows }) => {
    res.status(200).send({ lesson: rows[0].content });
  });
});

module.exports = app;
