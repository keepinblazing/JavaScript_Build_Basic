const id = Symbol("id");

const obj = {
  1: "1",
  false: "거짓",
  [id]: "myid",
  //computed property
};

const key = Object.keys(obj); // ['1', 'false'] key symbol형인 프로퍼티는 나타나지 않는다
const value = Object.values(obj); // ['1', '거짓']

// symbol 유일한 식별자, 문자열을 전달

const a = Symbol("a"); // Symbol(a)
const a2 = Symbol("a"); // Symbol(a)

// console.log(a === a2) false, 값은 같아 보이지만 각자 다름

const desc = a.description; // a, 심볼의 설명

// Symbol.for() => 전역 심볼, 없으면 생성하고 있으면 가져온다. Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 심볼을 공유한다.

const b = Symbol.for('b')
const b2 = Symbol.for('b')

// console.log(b === b2) true를 반환한다.

const keyFor = Symbol.keyFor(b); // b
