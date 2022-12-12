const db = require("../connection");

async function seed(tokens) {
  await db.query("DROP TABLE IF EXISTS lessons_content");
  await db.query(
    "CREATE TABLE lessons_content (uid SERIAL PRIMARY KEY, content JSON)"
  );
}

seed().then(() => {
  db.end();
});
