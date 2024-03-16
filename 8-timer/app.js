let num = 1;

// setInterval는 자동적으로 멈추지 않기 때문에 우리가 멈춰줘야한다. 그래서 setTimeout 사용
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("Timeout!");
  clearInterval(interval);
}, 6000); // 1 2 3 4 5 Timeout!
