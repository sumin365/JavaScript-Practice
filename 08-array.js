//  배열의 생성 방법 1. Array 객체 이용
const v1 = new Array(10);   //  10개짜리 배열
const v2 = new Array();     //  빈 배열
const v3 = new Array(1, "JavaScript", true);    //  어떤 객체든 다 들어감

//  길이를 측정할 수 있다.
console.log(v1.length, v2.length, v3.length);   //  .length 속성

//  배열의 생성 방법 2. [] 리터럴 (추천)
const v4 = [];  //  빈 배열
const colors = ['red', 'green', 'blue', 'yellow'];

//  배열의 타입 체크
console.log("타입체크:", typeof v4, typeof colors); //  object, object
//  배열 타입을 체크하는 좀 더 추천하는 방법
console.log("배열체크:", Array.isArray(v4), Array.isArray(colors)); //   배열이면 true

//  배열을 기본 값으로 채우기 .fill()
const v5 = new Array(10).fill(1);   //  10개 배열을 만들고 1로 채우기
console.log("v5:", v5);
v5.fill('change');
console.log("v5:", v5);

//  객체와 배열의 관계
//  객체의 속성들도 배열 인덱스처럼 접근할 수 있다
const person = {
    name: "홍길동",
    age: 28
};

console.log("속성 접근:", person.name, person.age);
console.log("속성 접근:", person['name'], person['age']);   //  마치 Map 자료형처럼 활용 .배열로 접근가능

//  자바스크립트 배열은 인덱스를 엄격하게 체크하지 않는다
const arr = [];
console.log("Length of arr:", arr.length);
arr[10] = 2021; //  인덱스 범위를 벗어난 접근 -> OK
console.log("Length of arr:", arr.length);
console.log("arr:", arr);

//  배열 합치기 : concat
const veges = ['배추', '무', '쪽파'];
const sources = ['소금', '고춧가루', '새우젓'];
const ingr = veges.concat(sources); //  veges 배열에 sources 배열을 연결 새 배열 만듦
console.log("CONCAT:", veges, sources, ingr);

//  배열 요소를 문자열로 합침: join
console.log("JOIN:", ingr, '=>', ingr.join(", "));  //  요소를 , 문자를 기준으로 합침

//  push, pop -> Stack(LIFO) 처럼 활용 가능
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("STACK:", fruits);
fruits.push("Kiwi");    //  배열의 맨 마지막에 요소를 추가
console.log("STACK:", fruits);
console.log("POP:", fruits.pop());  //  맨 마지막 요소를 추출후 제거
console.log("POP:", fruits.pop());  //  맨 마지막 요소를 추출후 제거
console.log("STACK:", fruits);

//  push, shift -> QUEUE(FIFO) 처럼 활용 가능
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());  //  맨 첫번째 요소를 추출후 제거
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());
console.log("QUEUE:", fruits);

//  splice: 요소의 삭제와 추가
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 1개 - 해당 인덱스부터 끝까지 추출 후 삭제
console.log("SPLICE(2):", fruits.splice(2));
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 2개 - 시작 인덱스, 갯수 -> 추출 후 삭제
console.log("SPLICE(2, 1):", fruits.splice(2, 1));  //  2번 인덱스부터 1개를 추출 후 제거
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
//  인수가 3개 이상 - 시작 인덱스, 갯수, 추가할 아이템들
console.log("SPLICE(2, 1, items...):", fruits.splice(2, 1, "Kiwi", "Melon"));
console.log("원본:", fruits);

//  reverse, slice
console.log("원본:", fruits);
fruits.reverse();   //  순서 뒤집기
console.log("원본:", fruits);
let slices = fruits.slice(1, 2);
console.log("SLICE(1, 2):", slices);
console.log("원본:", fruits);   //  SLICE는 요소 삭제 안함

//  sort 
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
fruits.sort();  //  기본적으로는 오름차순 정렬
console.log("오름차순 정렬:", fruits);

//  내림차순 혹은 사용자 정의 기준으로 정렬 -> 정렬 기준 함수를 전달
fruits.sort(function(v1, v2) {
    /* return 값
    0 : 두 값은 같은 순번
    음수 : v1이 앞이다
    양수 : v2가 앞이다
    */
    //  내림차순 정렬
    if (v1 == v2) return 0; //  순번이 같다
    if (v1 < v2) return 1;  //내림차순이니까 부등호 반대로 하기 
    if (v1 > v2) return -1;
});
console.log("내림차순 정렬:", fruits);

//  split (String의 메서드): 문자열을 특정 구분자를 기준으로 분리, 배열로 반환
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");    //  공백을 기준으로 분할

console.log("SPLIT:", chunks);

for (let i = 0; i < chunks.length; i++) {
    console.log("CHUNK:", chunks[i]);
}