//https://velog.io/@kim_unknown_/JavaScript-ES6

// - var은 재정의와 재선언 모두 가능하다.
// - let은 가변변수로 재정의가 가능하지만 재선언은 불가능하다.
// - const는 불변변수로 재선언과 재정의 모두 불가능하다.

var jsp = '자바스크립트';

// 기존 코드
console.log('이건 ' + jsp + '입니다.');

// ES6
console.log(`이건 ${jsp}입니다.`);

// 기본 함수 형식
var sum = function (a, b) {
  return a + b;
};

// ES6
var sum = (a, b) => a + b;

// args에 1,2,3,4,5가 한꺼번에 배열로 담겨 인자로 넘겨진다.
function func1(...args) {
  console.log(`args: [${args}]`);
  // args: [1,2,3,4,5]
}
func1(1, 2, 3, 4, 5);

// arg1에는 1, arg2에는 2, arg3에는 나머지 3,4,5가 배열로 담겨 인자로 넘겨진다.
function func2(arg1, arg2, ...arg3) {
  console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: [${arg3}]`);
  // arg1: 1, arg2: 2, arg3: [3,4,5]
}
func2(1, 2, 3, 4, 5);

let arr = [1, 2, 3, 4, 5];
console.log(...arr);
// 1 2 3 4 5

var str = 'javascript';
console.log(...str);
// "j" "a" "v" "a" "s" "c" "r" "i" "p" "t"

// ES5
function myFn(a, b) {
  var a = a || 100;
  var b = b || 200;
  return a + b;
}
console.log(myFn(100)); // 300
// ES6
const myFn = (a = 100, b = 200) => a + b;
console.log(myFn()); // 300
