
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
