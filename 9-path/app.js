const path = require("path");

// 운영체제마다 다르다
// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // /Users/kyosung/Desktop/node/9-path
console.log(__filename); // /Users/kyosung/Desktop/node/9-path/app.js

console.log(path.sep); // /
console.log(path.delimiter); // :

// basename
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js")); // app

// dirname
console.log(path.dirname(__filename)); // /Users/kyosung/Desktop/node/9-path

// extension
console.log(path.extname(__filename)); // .js

// parse - 하나하나 분리
const parsed = path.parse(__filename);
console.log(parsed);
/*
{
  root: '/',
  dir: '/Users/kyosung/Desktop/node/9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/

const str = path.format(parsed); // 재결합
console.log(str); // /Users/kyosung/Desktop/node/9-path/app.js

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); // true
console.log("isAbsolute?", path.isAbsolute("../")); // false

// normalize - 경로가 이상하면 자동으로 고쳐줌
console.log(path.normalize("./folder/////sub")); // folder/sub

// join
console.log(__dirname + "/" + "img"); // /Users/kyosung/Desktop/node/9-path/img
console.log(__dirname + path.sep + "img"); // /Users/kyosung/Desktop/node/9-path/img
console.log(path.join(__dirname, "img")); // /Users/kyosung/Desktop/node/9-path/img
