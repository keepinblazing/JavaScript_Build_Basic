//1. 중첩함수
function outerFn() {
  let x = 10;

  return function innerFn(y) {
    return (x = x + y);
  };
}

let a = outerFn();

a(5); //15
a(5); //20
a(5); //25

//2. 전역에 선언한 변수를 박스 안에서 함수로 정의하고 전역에서 호출
let globalFunc;
{
  let x = 10;
  globalFunc = function (y) {
    return (x = x + y);
  };
}
globalFunc(5); // 15;
globalFunc(5); // 20;
globalFunc(5); // 25;

