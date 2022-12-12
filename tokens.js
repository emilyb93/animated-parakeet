const { marked } = require("marked");
const { readFile } = require("fs/promises");

readFile("./useSearchParams.md", "utf-8")
  .then((file) => {
    return marked.lexer(file);
  })
  .then((lexedFile) => {
    console.log(lexedFile);
  });
