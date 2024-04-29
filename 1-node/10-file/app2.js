const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./text.txt", "Hello Kevin!").catch(console.error);

fs.writeFile("./text.txt", "Hello Kevin! 2").catch(console.error);

// append
fs.appendFile("./text.txt", "appended2!")
  .then(() => {
    // copy
    fs.copyFile("./text.txt", "./text2.txt").catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
