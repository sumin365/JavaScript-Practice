function testForEach() {
    //  배열의 개별 요소들을 한개씩 콜백 함수로 전달
    let source = ["Banana", "Orage", "Apple", "Mango"];
    console.log("----- forEach");
    source.forEach(item => {
        console.log("item:", item);
    });

    //  콜백 함수에서 요소의 인덱스가 필요할 때
    source.forEach((item, index) => {
        console.log(`${index + 1}번째 item: ${item}`);
    }); 

    //  콜백에서 아이템, 인덱스, 배열 자체가 필요할 때
    source.forEach((item, index, arr) => {
        //  arr은 배열 자체
        console.log(`${ arr }의 ${index + 1}번째 item: ${item}`);
    })
}
// testForEach();

function testFilter() {
    console.log("---------- filter");   
    //  배열의 내부 요소 중 조건에 부합하는 요소만 추출하여 새 배열로 반환
    const source = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    //  source 배열 내에서 짝수만 추출해 봅시다.
    //  ES5 방식
    let result = [];    //  결과 배열
    for (let i = 0; i < source.length; i++) {
        if (source[i] % 2 == 0) {   //  내부 값이 짝수면
            result.push(source[i]); //  결과 배열에 추가
        }
    }
    console.log("짝수 필터링(ES5):", result);

    //  ES6 방식
    result = source.filter(item => item % 2 == 0);  //  짝수인 것만 필터링 -> 새배열로 생성
    console.log("짝수 필터링(filter):", result);
}
// testFilter();

function testMap() {
    console.log("---------- map");

    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //  source 배열 내부의 모든 요소를 2배 할 때
    //  ES5 방식
    let multiply = [];

    for (let i = 0; i < source.length; i++) {
        let item = source[i];
        multiply.push(item * 2);
    }
    console.log("배열 변형(for):", multiply);

    //  map 함수
    multiply = source.map(item => item * 2);
    console.log("배열 변형(map):", multiply);
}
// testMap();

function testChain() {
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //  원본 배열에서 짝수만 추출해서 2배를 해 봅시다.
    //  ES5 방식
    let target = [];
    for (let i = 0; i < source.length; i++) {
        let item = source[i];
        if (item % 2 == 0) {    //  짝수
            target.push(item * 2);
        }
    }
    console.log("target:", target);

    //  filter -> map -> 결과
    //두개를 한번에 쓰는방법 익숙해지기 
    target = source.filter(item => item % 2 == 0).map(item => item * 2);
    console.log("target:(filter -> map):", target);
}
testChain();