var fs = require("fs");

fs.readFile("welcome.txt", function (erro, data) {
  if (erro) {
    return console.error(erro);
  }
  console.log("the text file contains :" + data.toString());
});
console.log("Loading....");