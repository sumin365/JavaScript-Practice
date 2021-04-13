//  JavaScript의 문자열
//  
let s1 = "Modern JavaScript and Java";
let s2 = String("Modern JavaScript and Java");

console.log(s1, s2);
console.log(typeof s1, typeof s2);

console.log("s1 == s2 ?", s1 == s2);    //  값의 비교도 ==로 하면 된다

//  문자가 여러 개 연결된 타입 : 길이를 잡을 수 있다
console.log("string:", s1, ", length:", s1.length);

//  문자열 추출 메서드, 인덱스 이용하여 내용에 접근
console.log(s1);
console.log("7th char:", s1.charAt(7)); //  7번 인덱스의 글자

console.log("7th char:", s1[7]); //  그 자체로 배열처럼 접근할 수 있다
console.log(s1.substr(7, 10));  //  7번 인덱스 ~ 10글자
console.log(s1.substr(7));      //  끝까지
console.log(s1.substring(7, 17));   //  7번 인덱스 ~ 16번 인덱스
console.log(s1.substring(7));   //  7번 인덱스 ~ 끝까지

console.log("========== Search");
console.log("원본:", s1);

let position = s1.indexOf("Java");  //  s1에서 Java 검색
console.log("1st search:", position);
//  검색 시작 위치 조정
position += 4;
position = s1.indexOf("Java", position);    //  s1에서 Java 검색 시작위치 설정
console.log("2nd search:", position);

position = s1.indexOf("java");  //  없는 키워드의 검색
console.log("없는 키워드 검색:", position); //  -1 (Not found)
console.log("뒤쪽으로부터의 검색:", s1.lastIndexOf("Script"));  //  뒤로부터 검색 후 정인덱스 반환

console.log("========== 치환");
console.log("replace JavaScript -> JS:", s1.replace("JavaScript", "JS"));
console.log("원본:", s1);
//  String은 불변 객체 -> 내용을 바꿀 수는 없다 -> 새로운 객체가 생성 반환(*)
console.log("TRIM:", "           Hello, JavaScript         ".trim());   //  좌우 공백 제거

//  String 추가 내용
//  이스케이프 문자: 특수 문자를 부여할 수 있다
//      \n: 개행
//      \t: 탭
//      \': 작은 따옴표
//      \": 큰 따옴표
//      \`: 백틱(ES6)
//      \$: 달러 기호(ES6)

//  JavaScript의 문자열은 "" or ''
let message = "He said, \"Hello\"";
message = 'He said, \'Hello\'';

//  템플릿 문자열
console.log("========== Template String");
let temp = 24;
//  현재 실내 온도는 24도 입니다.

//  ES5 방식
message = "현재 실내 온도는 " + temp + "도 입니다.";
console.log("ES5 Way:", message);

//  ES6 방식
//  백틱(`)와 ${} 로 쉽게 해결 가능
message = `현재 실내 온도는 ${ temp }도 입니다.`;
console.log("ES6 Way:", message);

//  여러 줄 문자열을 만들 때
message = "예전에는 여러 줄 문자열을 만드는 게\n쉽지 않았어요.";
console.log(message);

message = `하지만 ES6에서는
    아주 손쉽게
    여러 줄 문자열을 
만들 수 있습니다.`;
console.log(message);