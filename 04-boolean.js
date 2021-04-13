let v1; //  선언은 했으나 할당되지 않은 변수    -> undefined
let v2 = null;  //  개발자가 비어있는 상태로 할당

console.log("v1:", v1);
console.log("v2:", v2);
//  null은 프로그래머가 주체적으로 할당하는 빈 객체
//  undefined는 자바스크립트 엔진이 사용하는 상태 

//  undefined의 체크 -> 체크에 유의
console.log(v1, typeof v1, v1 == undefined);
//  임의로 개발자에 의해 할당될 수 있다
v2 = undefined;
console.log(v2, typeof v2, v2 == undefined);

//  == vs ===
console.log(123 == "123");  //  number == string: 내용만 비교
console.log(123 === "123"); //  === : 내용과 데이터의 타입까지 비교

//  number, string이 비어있으면 Boolean은 false, 내용이 있으면 true
console.log(Boolean("String"), Boolean(""));    //  .length > 0, .length == 0
console.log(Boolean(123), Boolean(0));  //  != 0, == 0