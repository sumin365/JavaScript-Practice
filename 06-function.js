//  함수 선언문 : function
function sum(a, b) {    //  매개변수 a, b를 받아서
    return a + b;       //  결과를 반환한다 -> return 문을 만나면 함수는 종료
}

console.log(sum(10, 20));   //  호출 

//  함수 표현식 : 이름이 없는 함수 -> 익명 함수
//  함수는 객체이므로 변수로 할당될 수 있고
//  다른 함수의 매개 변수로 전달 될 수 있다
const asum = function(a, b) {
    return a + b;
};

console.log(typeof asum, asum(10, 20));




//  익명 함수의 활용 1. 
//즉시 실행 함수  -> 주로 페이지의 초기화를 할때 유용
let initText;
(function(number) {
    let textList = ["홀수", "짝수"];    //  함수 내부에서만 사용하고 버릴 임시 데이터
    if (number % 2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`매개변수 ${number}를 이용해서 즉시 실행했습니다.`);
})(5);  //  즉시 실행
// console.log("textList:", textList); // textList는 함수 내부에 있어서
//  외부에서 참조가 불가 -> Error
console.log("초기화 진행 후 initText:", initText);  //initText 는 미리 외부에서 먼저 선언되서 접근가능 
                                                   // textList는 임시 데이터-> 함수 내부에 있어서 외부에서 참조가 불가 -> Error



//  익명 함수의 활용 2.
//  함수 매개 변수의 이해
//  자바스크립트에서는 매개변수 선언하지 않아도 전달되는 모든 인수가 arguments 배열로 전달된다
    //   function getNumberTotal() {            //  매개변수 선언하지 않음
    //  console.log("매개변수:", arguments);    -> undefined가 나옴 return 값이 없으니까

    //  전달받은 모든 매개변수를 합산 출력
    function getNumberTotal() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        //  전달 받은 매개 변수가 산술연산 가능?
        if (typeof arguments[i] == "number") {
            result += arguments[i]; //  인덱스 접근
        }
    }
    return result;
}

console.log("getNumberTotal:", getNumberTotal(1, 2, 3, 4, 5));
console.log("getNumberTotal:", getNumberTotal(1, 2, "3", 4, 5));

//  JavaScript의 함수는 객체: 변수에 참조되거나 다른 함수의 매개변수로 전달될 수 있다
function calcUsingCallback(val1, val2, func) {
    //  내부 실행 로직을 외부에서 전달받는다
    if (typeof func == "function") {    //  매개변수 func가 함수면
        func(val1, val2);   //  외부로부터 전달받은 함수를 내부에서 거꾸로 실행 -> Callback
    }
}

//  화살표 함수는 함수에 콜백 함수를 전달할 때 유용
//calcUsingCallback(3, 4, function(v1, v2) {
//    console.log(v1 + v2);
//});
//calcUsingCallback(3, 4, (a, b) => console.log(a, b));????????????????????????????????????????????????????????????????????????????????????????????????






calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});

calcUsingCallback(3, 4, function(v1, v2) {
    //  함수의 매개변수로 전달되서 타 함수의 내부에서 거꾸로 호출되는 함수 -> 콜백함수
    console.log(v1 * v2);
});

//  ES6에서 등장한 함수 : 화살표 함수 =>
console.log("========== 화살표 함수");
const f1 = function() { return "Hello" };
const f1Arrow = () => "Hello";  //  매개 변수가 없는 화살표 함수
console.log(f1(), f1Arrow());

const f2 = function(name) { return "Hello, " + name };
const f2Arrow = (name) => "Hello, " + name; //  매개 변수가 있는 화살표 함수
console.log(f2("홍길동"), f2Arrow("홍길동"));

const f3 = function(a, b) { return a + b };
const f3Arrow = (a, b) => a + b;
console.log(f3(3, 7), f3Arrow(3, 7));

//  화살표 함수는 함수에 콜백 함수를 전달할 때 유용
//calcUsingCallback(3, 4, function(v1, v2) {
//    console.log(v1 + v2);
//});
calcUsingCallback(3, 4, (a, b) => console.log(a, b));