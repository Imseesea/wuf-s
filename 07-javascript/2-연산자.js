//산술 연산자
//+,-,*,/,%,++,--

console.log(1 + 2); //3
console.log(5 - 7); //-2
console.log(5 * 7); //35
console.log(10 / 2); //5
console.log(7 % 5); //2
console.log(6 % 3); //0
console.log(8 % 2); //0

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3)); //false
console.log(isEven(4)); //true

//할당 연산자

let a = 2;
console.log(a); //2

a = 3;
console.log(a); //3

// a = a + 3;
a %= 3;
console.log(a); //6

//증가 연산자
let b = 1;

//b=b+1
console.log(++b);
console.log(++b);

//감소 연산자
let c = 1;

//c = c -1
console.log(c--); //1
console.log(c); //1

//부정 연산자
console.log(!true); //false
console.log(!false); //true
console.log(!0); //true
console.log(!1); //false
console.log(!!0); //false

console.log(![]); //false
console.log(!{}); //false
console.log(!null); //true
console.log(!function () {}); //false
