
// // 배열 내에 모든 요소들을 문자열 형태로 합치는 메서드

// const arr = ["이정환", "님", "안녕하세요", "또 오셨군요"];

// console.log(arr.join(" "));
// // join() 안에 전달하는 무언가는 구분자가 된다.
// // 쉼표가 싫으면 " "이걸 사용하여 공백으로 바꿔준다
// // 쉼표로 구분되어 문자열로 하나로 합쳐서 return을 해줌

// // console.log(arr[0], arr[1], arr[2], arr[3]);

//-----------------------------//

// // 숫자형 배열

// let numbers = [0, 1, 3, 2, 10, 30, 20];

// const compare = (a, b) => {
//   // 1.같다
//   // 2.크다
//   // 3.작다

//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
//   return 0;
// };
// // 비교함수가 a와 b를 전달을 받았을 때
// // a가 b보다 클 때 1을 반환한다는 것은 a가 b보다 뒤에 있어야된다
// // a가 b보다 작을 때 -1을 반환한다는 것은 a가 b보다 앞에 있어야된다
// // a와 b가 같을 때는 자리를 안 바꾼다
// // 내림차순일때는 비교 연산자나 값을 바꾸면 된다

// numbers.sort(compare);
// // sort 메서드의 인자로 비교 한수를 직접 만들어서 넣어줘야함

// console.log(numbers);

//-----------------------------//

// // 문자형 배열 정렬
// let chars = ["나", "다", "가"];

// chars.sort();
// // 문자열을 사전 순으로 정렬하고 싶을 때
// // sort는 문자열을 기준으로 정렬
// // 원본 배열의 순서를 정렬

// console.log(chars);

//-----------------------------//

// // 배열 붙이기

// const arr1 = [
//   { num: 1, color: "red" },
//   { num: 2, color: "black" },
//   { num: 3, color: "blue" }
// ];

// const arr2 = [
//   { num: 4, color: "green" },
//   { num: 5, color: "blue" }
// ];

// console.log(arr1.concat(arr2));

//-----------------------------//

// // 배열을 자르는 메서드

// const arr = [
//   { num: 1, color: "red" },
//   { num: 2, color: "black" },
//   { num: 4, color: "blue" },
//   { num: 5, color: "green" },
//   { num: 6, color: "blue" }
// ];

// console.log(arr.slice(0, 2));
// // end 지점에서 -1을 한 값까지만 반환 === 0 ~ 2면 0 ~ 1과 같음
// // slice 메서드를 사용하면 원하는 지점까지의 값만 반환

//-----------------------------//

// // 배열 필터링

// const arr = [
//   { num: 1, color: "red" },
//   { num: 2, color: "black" },
//   { num: 3, color: "blue" },
//   { num: 4, color: "green" },
//   { num: 5, color: "blue" }
// ];

// console.log(arr.filter((elm) => elm.color === "blue"));
// // 배열의 메서드 중 filter라는 메서드는 전달한 콜백함수가
// // true를 반환하는 모든 요소를 배열로 반환하는 것
// // 배열에서 어떤 특정한 조건을 만족하는 것들을 배열로 반환하고 싶으면 filter 사용

//-----------------------------//

// const arr = [
//   { color: "red" },
//   { color: "black" },
//   { color: "blue" },
//   { color: "green" },
//   { color: "blue" }
// ];

// let number = 3;

// const element = arr.find((elm) => {
//   // find를 사용하면 만족하는 요소 자체를 반환
//   return elm.color === "blue";
// });

// console.log(element);

//-----------------------------//

// const arr = [
//   { color: "red" },
//   { color: "black" },
//   { color: "blue" },
//   { color: "green" },
//   { color: "blue" }
// ];

// let number = 3;

// const idx = arr.findIndex((elm) => {
// // findIndex를 사용하면 요소의 인덱스만 반환
//   return elm.color === "blue";
// });

// console.log(arr[idx]);
// // findIndex를 통해서 배열 접근
// // findIndex를 사용하면서 요소 자체를 반환 시키고 싶을때는
// // arr[idx]이런식으로 따로 작성해야함

//-----------------------------//

// const arr = [
//   { color: "red" },
//   { color: "black" },
//   { color: "blue" },
//   { color: "green" },
//   { color: "blue" }
//   // findIndex는 일치하는 조건이 두개 있을 경우에는 가장 먼저 만나는 조건을 반환
//   // 배열을 처음부터 끝까지 순서대로 순화하면서 가장 먼저 조건을 만족하는 조건의 인덱스를 반환하기 때문
// ];

// let number = 3;

// // console.log(arr.findIndex((elm) => elm.color === "red"));
// // // 배열의 find index 메서드를 이용하면 콜백 함수를 전달해서 해당 콜백 함수가 true를 반환하는 그런 로직을 작성 가능

// console.log(
//   // arr이라는 배열의 모든 요소를 한번씩 순서대로 순회함
//   //
//   arr.findIndex((elm) => {
//     return elm.color === "green";
//   })
// );

//-----------------------------//

// const arr = [1, 2, 3, 4];

// let number = 3;
// // 배열 안에 존재하는 값을 인자로 전달하게 되면 배열에서 그 값이 몇번째 위치하는지 알려준다
// // === 0,1,2 => 2가 출력

// // let number = "3";

// // arr이라는 배열에 문자열 3은 없으니까
// // indexOf라는 함수는 주어진 배열에서 전달 받은 인자와 일치하는 값의 index를 반환하는 함수
// // 주어진 값과 배열의 값의 일치하는게 하나도 없으면 -1을 출력

// console.log(arr.indexOf(number));

//-----------------------------//

// const arr = [1, 2, 3, 4];

// let number = 3;
// // let number = "3"; // === false

// console.log(arr.includes(number));

//-----------------------------//

// const arr = [1, 2, 3, 4];

// let number = 3;

// arr.forEach((elm) => {
//   if (elm === number) {
//     console.log(true);
//   }
// });

//-----------------------------//

// // map을 사용한 배열 내장함수

// const arr = [1, 2, 3, 4];
// const newArr = arr.map((elm) => {
//   return elm * 2;
// });

// console.log(newArr);

//-----------------------------//

// const arr = [1, 2, 3, 4];
// const newArr = [];

// arr.forEach(function (elm) {
//   newArr.push(elm * 2);
// });

// console.log(newArr);

//-----------------------------//

// const arr = [1, 2, 3, 4];

// // arr.forEach((elm) => console.log(elm)); // 콜백함수와 비슷한 형식
// // 마치 for문을 작성한 것처럼 배열의 요소를 하나하나씩 콘솔을 통해 출력할 수 있다

// arr.forEach(function (elm) {
//   // 함수 선언 방식
//   // forEach라는 배열의 내장함수는 배열의 모든 요소를 한번씩 순회할 수 있도록 해줌
//   // 하나하나의 요솔를 이 forEach 메서드 안에 전달되는 콜백 함수에 한번씩 전달을 파라미터로 해주면서 이런 식으로 우리가 원하는 작업을 할 수 있게 해즘
//   console.log(elm);
// });

//배열 내장함수----------------------------------------------------

// // 객체 순환

// let person = {
//   name: "이정환",
//   age: 25,
//   tall: 175
// };

// const personValues = Object.values(person);
// // object.keys라는 함수를 사용하면 객체 안에 있는 키값들을 순서대로 배열로 반환받을 수 있다

// for (let i = 0; i < personValues.length; i++) {
//   // for문을 이용해 순회를 해주면 객체의 프로포티의 value들을 배열처럼 반환 받아서 순회할  있음
//   console.log(personValues[i]);
// }

//-----------------------------//

// // 객체 순환

// let person = {
//   name: "이정환",
//   age: 25,
//   tall: 175
// };

// const personKeys = Object.keys(person);
// // object.keys라는 함수를 사용하면 객체 안에 있는 키값들을 순서대로 배열로 반환받을 수 있다
// console.log(personKeys);

// for (let i = 0; i < personKeys.length; i++) {
//   // key와 value를 같이 순회할 경우
//   const curKey = personKeys[i];
//   const curValue = person[curKey];

//   console.log(`${curKey} : ${curValue}`);
//   // 객체를 배열처럼 순회
// }

// //-----------------------------//

// // //배열 순회

// // const arr = ["a", "b", "c"];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// //-----------------------------//

// // // for문

// // for (let i = 1; i <= 100; i++) {
// //   // 초기식       조건식      증감연산자
// //   // 반복 수행할 명령
// //   console.log("sunmin");
// // }

//반복문----------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);
// // 배열에 이름에 .점 표기법을 찍고 length라고 하면 마치 객체의 프로포티 접근처럼 리스트형 데이터를 담을 수 있다
// // 이 length는 배열이 바뀌면 자동으로 갱신된다

//-----------------------------//

// let arr = [1, 2, 3, 4, 5];

// arr.push(6); //push를 사용하여 배열에 가장 마지막에 원소 추가 가능
// arr.push({ key: "value" });
// console.log(arr);

//-----------------------------//

// // let arr = new Array(); //생성자 호출

// // let arr = [1, "2", true, null, undefined, {}, [], function () {}]; // 자료형 상관 없음
// let arr = [1, 2, 3, 4, 5]; //배열 리터럴
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

//배열---------------------------------------------

// let person = {
//   //프로포티 삭제
//   name: "이정환", //멤버 === 함수가 아닌 프로포티
//   age: 25, // 멤버
//   say: function () {
//     console.log("안녕");
//   } // 객체 안에 들어가있는 함수 === 메서드(방법) === 함수인 프로포티
// };

// person.say();
// person["say"]();

// // person.name = null;
// // null을 사용하면 삭제한것과 같은 효과를 낸다
// // 기존에 가지고 있던 문자 이정환을 메모리에서 날릴 수 있다

// // delete person["name"];
// // delete person.age;
// // 이런 방식은 실제 이 객체와 삭제 대상인 프로포티간의 연결을 끊을뿐
// // 실제로 메모리에서 name = 이정환이라는 메모리는 지워지지 않음(실제로는 메모리 계속 사용중)

// // console.log(person);


//-----------------------------//

// let person = {
//   //상수 객체
//   // const로 바꿔도 에러가 일어나지 않는 이유는
//   // 프로포티라는 값을 수정하는 행위는 person이라는 상수 자체를 수정하는게 아니다
//   // person이라는 상수가 갖는 오브젝트(객체를) 수정히는거지 상수 자체를 수정하는 행위가 아니다

//   name: "이정환",
//   age: 25
// };

// person.location = "한국";
// person["gender"] = "남성"; // 괄호 표기법

// person.name = "이정환 A"; //person의 name 프로포티의 값을 수정
// person["age"] = 40;

// // person = { // 상수 자체를 수정하는 행위 === const 사용 불가
// //   age = 20
// // };

// console.log(person);


//-----------------------------//

// let person = {
//   name: "이정환",
//   age: 25
// }; //객체 리터럴 방식

// console.log(getPropertyValue("name"));

// function getPropertyValue(key) {
//   return person[key];
// }

// // 괄호 표기법을 사용하기 좋은 상황은 동적인 파라미터를 전달받는 상황
// // 현재 key를 꺼내야하는데 그 key가 고정되어 있지 않는 상황

// //지금까지 객체를 생성하고 객체의 프로포티에 접근하는 방법을 배움

//-----------------------------//

// let person = {
//   name: "이정환",
//   age: 25
// }; //객체 리터럴 방식

// const name = "name";
// console.log(person[name]);
// // name 이라는 변수를 따로 만들면 문자열로 안써도 가능
// // consol.log(person["name"]);
// // 괄호 표가법 반드시 문자열로 (name을 변수로 인식하기 때문)
// // 함수로 이 객체에 프로포티의 키를 통해서 value를 받아오는 함수가 필요할 경우 유용하게 쓰임
// console.log(person.age); // 점 표기법


//-----------------------------//

// let person = {
//   key: "value", // 프로퍼티 (객체 프로퍼티)
//   key1: 123,
//   key2: true,
//   key3: undefined,
//   key4: [1, 2],
//   key5: function () {}
// }; //객체 리터럴 방식

// console.log(person.key1); // 점 표기법
// console.log(person.key2);


//-----------------------------//

// let person = new Object();
// //객체 생성자 이용 (new라는 키워드가 붙으면 그 뒤에 있는 객체(person)를 생성한다

// let person = {}; 
// // 객체 리터럴 방식

//객체---------------------------------------------

// let person = {
//   //프로포티 삭제
//   name: "이정환", //멤버 === 함수가 아닌 프로포티
//   age: 25, // 멤버
//   say: function () {
//     console.log(`name: ${person["name"]}`);
//     // console.log(`안녕 나는 ${this.name}`);
//     // console.log(`안녕 나는 ${this["name"]}`);
//     // 객체 안에 메서드를 만들게 되면 그 메서드 안에서는 자기 자신을 this라는 이름으로 부를 수 있다.
//     // this === person
//   } // 객체 안에 들어가있는 함수 === 메서드(방법) === 함수인 프로포티
// };

// console.log(`name: ${"name" in person}`);
// console.log(`age : ${"age" in person}`);
// console.log(`gender : ${"gender" in person}`);
// // => person 객체에 name이라는 property가 있냐?

// // console.log(person.gender);

// // person.say();
// // person["say"]();

// // person.name = null;
// // null을 사용하면 삭제한것과 같은 효과를 낸다
// // 기존에 가지고 있던 문자 이정환을 메모리에서 날릴 수 있다

// // delete person["name"];
// // delete person.age;
// // 이런 방식은 실제 이 객체와 삭제 대상인 프로포티간의 연결을 끊을뿐
// // 실제로 메모리에서 name = 이정환이라는 메모리는 지워지지 않음(실제로는 메모리 계속 사용중)

// // console.log(person);

//-----------------------------//

// let person = {
//   //프로포티 삭제
//   name: "이정환", //멤버 === 함수가 아닌 프로포티
//   age: 25, // 멤버
//   say: function () {
//     console.log("안녕");
//   } // 객체 안에 들어가있는 함수 === 메서드(방법) === 함수인 프로포티
// };

// person.say();
// person["say"]();

// // person.name = null;
// // null을 사용하면 삭제한것과 같은 효과를 낸다
// // 기존에 가지고 있던 문자 이정환을 메모리에서 날릴 수 있다

// // delete person["name"];
// // delete person.age;
// // 이런 방식은 실제 이 객체와 삭제 대상인 프로포티간의 연결을 끊을뿐
// // 실제로 메모리에서 name = 이정환이라는 메모리는 지워지지 않음(실제로는 메모리 계속 사용중)

// // console.log(person);


//-----------------------------//

// let person = {
//   //상수 개체
//   // const로 바꿔도 에러가 일어나지 않는 이유는
//   // 프로포티라는 값을 수정하는 행위는 person이라는 상수 자체를 수정하는게 아니다
//   // person이라는 상수가 갖는 오브젝트(객체를) 수정히는거지 상수 자체를 수정하는 행위가 아니다

//   name: "이정환",
//   age: 25
// };

// person.location = "한국";
// person["gender"] = "남성"; // 괄호 표기법

// person.name = "이정환 A"; //person의 name 프로포티의 값을 수정
// person["age"] = 40;

// // person = { // 상수 자체를 수정하는 행위 === const 사용 불가
// //   age = 20
// // };

// console.log(person);


//-----------------------------//

// let person = {
//   name: "이정환",
//   age: 25
// }; //객체 리터럴 방식

// console.log(getPropertyValue("name"));

// function getPropertyValue(key) {
//   return person[key];
// }

// // 괄호 표기법을 사용하기 좋은 상황은 동적인 파라미터를 전달받는 상황
// // 현재 key를 꺼내야하는데 그 key가 고정되어 있지 않는 상황

// //지금까지 객체를 생성하고 객체의 프로포티에 접근하는 방법을 배움

//-----------------------------//

// let person = {
//   name: "이정환",
//   age: 25
// }; //객체 리터럴 방식

// const name = "name";
// console.log(person[name]);
// // name 이라는 변수를 따로 만들면 문자열로 안써도 가능
// // consol.log(person["name"]);
// // 괄호 표가법 반드시 문자열로 (name을 변수로 인식하기 때문)
// // 함수로 이 객체에 프로포티의 키를 통해서 value를 받아오는 함수가 필요할 경우 유용하게 쓰임
// console.log(person.age); // 점 표기법


//-----------------------------//

// let person = {
//   key: "value", // 프로퍼티 (객체 프로퍼티)
//   key1: 123,
//   key2: true,
//   key3: undefined,
//   key4: [1, 2],
//   key5: function () {}
// }; //객체 리터럴 방식

// console.log(person.key1); // 점 표기법
// console.log(person.key2);


//-----------------------------//

// let person = new Object();
// //객체 생성자 이용 (new라는 키워드가 붙으면 그 뒤에 있는 객체(person)를 생성한다

// let person = {}; 
// // 객체 리터럴 방식

//-----------------------------//

// function checkMood(mood, goodCallback, badCallback) {
//   if (mood === "good") {
//     //기분 좋을 때 하는 동작
//     goodCallback();
//   } else {
//     //기분 안 좋을 때 하는 동작
//     badCallback();
//   }
// }

// function cry() {
//   console.log("ACTION :: CRY");
// }
// function sing() {
//   console.log("ACTION :: SING");
// }
// function dance() {
//   console.log("ACTION :: DANCE");
// }

// checkMood("sad", sing, cry);

//콜백 함수---------------------------------------------

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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

// const age = 25; 
// // let 자리에 const가 들어오면 상수가 된다
// // 상수의 경우값을 바꾸려고 하면 오류가 난다 (이유 : 읽기전용이라 쓸 수 없음(값을 바꿀 수 없음))
// // 상수는 선언과 동시에 초기화가 이루어지지 않아도 오류가 발생 
// // 상수는 선언 이후에 절대 바꿀 수 없다

// console.log(age);

// // age = 30; //불가능


//변수와 상수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // var ag_$e = 25;
// let ag_$e = 25;
// console.log(ag_$e); //25
// // 변수명에 기호는 X
// // 하지만 "_", "$"는 사용 가능함
// // 숫자로 시작하는건 안되지만 숫자를 중간이나뒤에 붙이는건 가능
// // Js에서 사용하는 예약어들은 사용 불가 (ex) if

// ag_$e = 30;
// console.log(ag_$e); //30

//Hello Worldㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
