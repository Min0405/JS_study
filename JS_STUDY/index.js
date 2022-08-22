

//콜백 함수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let helloA = () => "안녕하세요 여러분"; //함수 표현식

// console.log(helloA());

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// console.log(helloB());
// // console.log(helloA()); //함수 표현식은 함수를 아래에 작성하여 hosting하는 것이 안된다

// let helloA = function () {
//   return "안녕하세요 여러분";
// }; // 함수 표현식

// function helloB() {
//   return "안녕하세요 여러분";
// } // 함수 선언식


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// let hello = function () {
//     return "안녕하세요 여러분";
//   }; // 함수 표현식
  
//   function helloFunc() {
//     return "안녕하세요 여러분";
//   } // 함수 선언식
  
//   const helloText = hello();
//   console.log(helloText);

//함수 표현식 & 화살표 함수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// function getArea(width, height) {
//     let area = width * height; //지역변수
//     return area;
//   } // 함수 선언식, 함수 선언 방식의 함수 생성
  
//   let area1 = getArea(100, 200);
  
//   // console.log(area);
//   // //함수 내부에 선언한 변수나 상수는 그 함수의 밖에서는 접근을 할 수 없음
//   // // 함수 내에 선언된 변수는 이 지역을 벗어날 수 없다 === 지역변수
  
//   // // 반대로 함수 외부에서 선언한 변수는 함수 내부에서 접근 가능 === 전역 변수 (글로벌 변수)
//   // // ex) let count = 1;
//   // //     function getArea(width, height) {
//   //        let area = width * height;
//   //        console.log(count); //전역 변수 (글로벌 변수)
//   //        return area;
//   //        }
  
//   //        let area1 = getArea(100, 200); 

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //반환

// function getArea(width, height) {
//     let area = width * height;
//     return area;
//   } // 함수 선언식, 함수 선언 방식의 함수 생성
  
//   let area1 = getArea(100, 200);
//   console.log("area1 : ", area1);
//   console.log("함수 실행 완료");
  

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // 매개변수

// function getArea(width, height) {
//     let area = width * height;
//     console.log(area);
//   } // 함수 선언식, 함수 선언 방식의 함수 생성
  
//   getArea(1, 200); // "()"의 역할은 매개변수를 전달하고 받는 과정을 하기 위해 존재
//   getArea(2, 200);
//   getArea(3, 200);
//   getArea(4, 200);
//   getArea(5, 200);
//   getArea(6, 200);
//   getArea(7, 200);
//   getArea(8, 200);
//   getArea(9, 200);
//   getArea(10, 200);
//   console.log("함수 실행 완료");
  

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //호출

// function getArea() {
//     let width = 10;
//     let height = 20;
  
//     let area = width * height;
//     console.log(area);
//   } // 함수 선언식, 함수 선언 방식의 함수 생성
  
//   getArea(); // "()"의 역할은 매개변수를 전달하고 받는 과정을 하기 위해 존재
//   console.log("함수 실행 완료");

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //선언

// let width1 = 10;
// let height1 = 20;

// let area1 = width1 * height1;
// console.log(area1);

// let width2 = 30;
// let height2 = 15;

// let area2 = width2 * height2;
// console.log(area2);

//함수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // switch case문

// let country = "ko";

// switch (country) {
//   case "ko":
//     console.log("한국");
//     break;
//   case "cn":
//     console.log("중국");
//     break;
//   case "jp":
//     console.log("일본");
//     break;
//   case "uk":
//     console.log("영국");
//     break;
//   default:
//     console.log("미 분류");
//     break;
// }


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //if, if else문

// let country = "ko";

// if (country === "ko") {
//   console.log("한국");
// } else if (country === "cn") {
//   console.log("중국");
// } else if (country === "jp") {
//   console.log("일본");
// } else {
//   console.log("미 분류");
// } 

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// let a = 4;

// if (a >= 7) {
//   console.log("7 이상입니다.");
// } else if (a >= 5) {
//   console.log("5 이상입니다.");
// } else if (a >= 3) {
//   console.log("3 이상입니다.");
// } else {
//   console.log("5 미만입니다.");
// }

//조건문ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // //null 병합 연산자

// let a;

// a = a ?? 10; 
// // // ?? === 병합연산자
// // // undefined여서 10이 출력 
// // // 왜 undefined이냐? === null은 따로 적어줘야함

// console.log(a);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // // typeof 연산자

// let compareA = 1;

// compareA = "1";
// // //동적타입 언어는 유연하다는 장점이 있지만 에러가 발생할 확률도 있다

// console.log(typeof compareA);
// // // typeof + 변수명을 쓰면 변수의 자료형이 무엇인지 문자열로 돌려줌
// // //그 단점을 보완하고자 typeof 연산자를 사용

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // //대소 비교

// let compareA = 1 >= 2;

// console.log(compareA);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // //비교 연산자

// // let compareA = 1 == "1";
// // // Js에서 "=="은 비교 연산이 값만 비교하기 때문에 타입이 다르더라도 값이 같으면 trye로 출력

// //let compareA = 1 === "1";
// // // "==="을 사용하면 값 뿐만 아니라 타입까지 비교하게 된다

// // let compareA = 1 != "1";
// // // // "!="을 사용하면 둘이 같지 않다라는 의미로 사용된다

// // let compareA = 1 !== "1";
// // // "!==" 타입까지 비교

// console.log(compareA);


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // //논리 연산자 (boolean 자료형을 위함)

// // console.log(true);
// // console.log(!true); // ! === NOT연산자

// // console.log(true && true); // && === AND연산자
// // console.log(true && false);

// console.log(true || false); // || === OR연산자
// console.log(false || false); // 이 경우에만 false가 출력된다

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // //증감 연산자
// // //원시타입 중 숫자형에만 사용 가능

// let a = 10;

// // // a++;
// // // a--;
// // //증감연산자는 산술 연산자를 연속으로 써주는것

// console.log(++a);
// // // 증감연산자를 앞에 쓰게 되면(전위 연산) 1이 먼저 증가하고 console.log가 찍힌다

// // console.log(a--);
// // //증감연산자를 뒤에 쓰게 되면(후위 연산) console.log가 먼저 찍히고 1이 증가하게 된다


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // //복합연산자

// let a = 5; //대입 연산자 사용

// // a = a + 10;
// a += 10;
// // // a -= 10; //곱셈
// // // a /= 10; //나눗셈
// // //산술연산자와 대입연산자를 함께 사용하여 복합연산자
// // //a += 10  === a = a + 10과 같다

// console.log(a);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //연결 연산자

// let a = "1"; 
// //대입 연산자

// let b = "2"; 
// //let b = 2; 이 형태여도 12가 출력되는데 이것은 묵시적 형변환이다

// console.log(a + b); 
// //문자열 두개를 이어 붙이는 연산을 연결 연산이라고 부른다

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //산술 연산자

// let a = 1; //대입 연산자

// let b = 2;

// console.log(a + b); // 산술 연산자

// console.log(a * b);

// console.log(a - b);

// console.log(a / b);

// console.log(a % b);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// //대입연산자

// let a = 1; //대입 연산자

//연산자ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let numberA = 12;

// let numberB = "2";

// console.log(numberA + parseInt(numberB));
// // parseInt는 문자열 값을 받아서 숫자로 돌려줌
// // 명시적 형변환

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // 형변환
// let numberA = 12;

// let numberB = "2";
// // JS가 문자 2를 자동으로 숫자 2로 인식하여 실행함
// // 코드를 읽고 해석하여 실행하는 JS 엔진은
// // 다른 자료형과의 연산을 수행할 때 적절하게 자료형으로 자동으로 변환하고 결과를 돌려줌
// // 형변환 casting
// // 묵시적 형변환

// console.log(numberA * numberB);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // 원시타입3
// let variable; // 변수를 선언했는데 아무 값도 나오지 않으면 undefined가 출력된다

// console.log(variable);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // 원시타입2
// let a = null; 
// // JS는 null이 아니라 undefined라고 나온다
// // null은 실제로 대입을 시켜줘여함 (의도적으로 이 변수는 아무값도 안 담고 있다를 표현함)
// console.log(a);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// // 원시타입 1
// let isSwitchOff = true; // boolean 자료형

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// let name = "sunmin";

// let name2 = "선민";

// // let name3 = `tjsals`;
// let name3 = `tjsals $(name2)`; //템플릿 리터럴
// // 문자열 안에 달러나 중괄호의 표현으로 변수의 값을 사이에 집어 넣을 수 있음
// // 문자 안에 변수의 값을 집어 넣을 수 있게 해주는

// console.log(name3);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// let age = 25; //정수

// let tall = 175.9; //실수

// let int = Infinity; //무한대

// let minusInf = -Infinity; //음의 무한대

// let nan = NaN; //연산이 잘못 수행되었을 경우에 수학적인 연산의 실패의 결과값으로 사용이 됨.

// console.log(age + tall);

//변수와 상수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const age = 25; 
// // let 자리에 const가 들어오면 상수가 된다
// // 상수의 경우값을 바꾸려고 하면 오류가 난다 (이유 : 읽기전용이라 쓸 수 없음(값을 바꿀 수 없음))
// // 상수는 선언과 동시에 초기화가 이루어지지 않아도 오류가 발생 
// // 상수는 선언 이후에 절대 바꿀 수 없다

// console.log(age);

// // age = 30; //불가능


//Hello Worldㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // var ag_$e = 25;
// let ag_$e = 25;
// console.log(ag_$e); //25
// // 변수명에 기호는 X
// // 하지만 "_", "$"는 사용 가능함
// // 숫자로 시작하는건 안되지만 숫자를 중간이나뒤에 붙이는건 가능
// // Js에서 사용하는 예약어들은 사용 불가 (ex) if

// ag_$e = 30;
// console.log(ag_$e); //30