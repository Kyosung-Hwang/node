const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 기본은 64 bytes
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  console.log(chunk);
  console.count(chunk);
});

readStream.on("error", (error) => {
  console.log(error);
});
