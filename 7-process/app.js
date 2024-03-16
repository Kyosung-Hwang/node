const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

// task queue에 이미 있는 다른 task들을 미뤄두고 (순서를 무시하고) nextTick의 우선순위를 제일 높여서 task queue 제일 앞부분에 넣어준다.
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 1000; i++) {
  console.log("for loop");
}
