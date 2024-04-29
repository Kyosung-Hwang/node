const http = require("http");
// const http2 = require('http2'); // https

const fs = require("fs");
const ejs = require("ejs");

const name = "Kyosung";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
];

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    // fs.createReadStream("./template/html/index.html").pipe(res);

    ejs
      .renderFile("./template/html/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/html/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Academy</title></head>");
    // res.write("<body><h1>Not Found!</h1></body>");
    // res.write("<html>");

    ejs
      .renderFile("./template/html/not-found.ejs", { name })
      .then((data) => res.end(data));
  }

  res.end();
});

server.listen(8080);
