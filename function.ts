// 함수 선언 : 호이스팅 O
Declareation();

function Declareation () {
    console.log('나는 선언식')
}
// 함수 표현 : 호이스팅 X

const Expression = function() {
    console.log('나는 표현식')
}

Expression();

// 화살표 함수 => 함수 표현식, 호이스팅이 되지 않는다.

const Whoareyou = () => {
    console.log('나는 화살표 함수')
}

Whoareyou();