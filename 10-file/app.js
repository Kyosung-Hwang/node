const fs = require("fs");

// 유의 사항
// 모든 API는 3가지 형태로 제공된다
// async 형태: rename(..., callback(error, data))
// sync 형태: renameSync(...) -> 이렇게 하면 어플리케이션이 죽으니까 항상 -> try { renameSync(...) } catch(e) {} 로 감싸줘야한다 <- sync 형태는 사용하지 않는것이 좋다
// primise 형태: promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}
console.log("hello");

fs.rename("./text-new.txt", "text.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./text.txt", "text-new.txt")
  .then(() => console.log("done"))
  .catch(console.error);
