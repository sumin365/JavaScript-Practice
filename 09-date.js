//  Date 날짜, 시간을 다루는 객체
let now = new Date();   //  현재 시간
console.log("현재시간:", now);

let past = new Date(1999, 11, 31);  //  1999년 12월 31, 1월 = 0 (주의)
console.log("과거:", past);
past = new Date(1999, 11, 31, 12, 30, 30);  //  년,월,일,시,분,초
console.log("과거:", past);

console.log("년도:", now.getYear() + 1900); //  1900년 기준
console.log("년도:", now.getFullYear());    //  실제 년도
console.log("월:", now.getMonth() + 1);     //  월 
console.log("일:", now.getDate());          //  일
console.log("요일:", now.getDay());         //  요일: 0 = 일요일