console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0); // 실제로 걸리는 시간은 더 걸릴 수 있다. 왜냐하면 콜스텍이 전부 없을때 진행하기 때문에

console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
}, 0);
