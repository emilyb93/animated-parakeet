const getTokens = require("../tokens");
const seed = require("./seed");
const db = require("../connection");
getTokens()
  .then((tokens) => {
    return seed(JSON.stringify(tokens));
  })
  .then(() => db.end());
