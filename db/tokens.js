const { marked } = require("marked");
const { readFile } = require("fs/promises");

function getTokens() {
  return readFile(`${__dirname}/../db/data/useSearchParams.md`, "utf-8")
    .then((file) => {
      return marked.lexer(file);
    })
    .then((lexedFile) => {
      console.log(lexedFile[5]);
      return lexedFile;
    });
}

module.exports = getTokens;
