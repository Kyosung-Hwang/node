console.log("logging...");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 발생하면 안되지만 그렇게 치명적인건 아닌 경고
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = {
  name: "kevin",
  age: 20,
  company: { name: "ABC", employee: { name: "sally" } },
};
console.log(student);
console.table(student);
console.dir(student, { showHidden: false, colors: true, depth: 1 });

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();