


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

//콜백 함수---------------------------------------------

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