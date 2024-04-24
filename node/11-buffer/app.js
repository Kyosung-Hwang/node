// Buffer: fixed-size chuck of memory
// array of intergers, byte of data (메모리에 들어있는 데이터 자체를 가리키고 있다)

const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69>
console.log(buf.length); // 2
console.log(buf[0]); // ASCII 72
console.log(buf[1]); // ASCII 105
console.log(buf.toString()); // Hi

// create
const buf2 = Buffer.alloc(2); // 초기화 되서 안전함
const buf3 = Buffer.allocUnsafe(2); // fast but 초기화가 안됨
console.log(buf2);
console.log(buf2);
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString()); // Hi

buf2.copy(buf3);
console.log(buf3.toString()); // Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
