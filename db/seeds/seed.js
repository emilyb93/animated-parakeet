const db = require("../connection");

async function seed(tokens) {
  await db.query("DROP TABLE IF EXISTS lessons_content");
  await db.query(
    "CREATE TABLE lessons_content (uid SERIAL PRIMARY KEY, content JSON)"
  );

  await db.query(`INSERT INTO lessons_content (content) VALUES($1)`, [tokens]);
}

module.exports = seed;
