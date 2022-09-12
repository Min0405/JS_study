





// Node.js란---------------------------------------------------

// async function getData() {
//   let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let jsonResponse = await rawResponse.json();
//   console.log(jsonResponse);
// }

// getData();
// // fetch는 API를 호출할 수 있도록 도와주는 내장함수
// // 비동기처리 함수(then을 통해 사용 가능)

// API & fetch---------------------------------------------------

// // await

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// // await 이용 후
// async function helloAsync() {
//   await delay(3000);
//   return "hello async";
// }

// // await 이용 전
// // async function helloAsync() {
// //   return delay(3000).then(() => {
// //     return "hello Async";
// //   });
// // }

// async function main() {
//   const res = await helloAsync();
//   console.log(res);
// }

// main();

//-----------------------------//

// // async

// function hello() {
//   return "hello";
// }

// async function helloAsync() {
//   return "hello Async";
// }
// // helloAsync 함수에서는 promise 리턴하고 있다
// // async를 함수에 붙이면 함비동기처리 함수가 된다
// // 즉 promise를 반환한다는 것은 console.log를 사용하지 않고
// // then을 사용해도 된다는 얘기이다

// helloAsync().then((res) => {
//   console.log(res);
// });
// //

// // console.log(hello());
// // console.log(helloAsync());

// async & await - 직관적인 비 동기 처리 코드 작성하기---------------------------------------------------

// // 중간에 껴넣기

// function taskA(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a + b;
//       resolve(res);
//     }, 3000);
//   });
// }

// function taskB(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * 2;
//       resolve(res);
//     }, 1000);
//   });
// }

// function taskC(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * -1;
//       resolve(res);
//     }, 2000);
//   });
// }

// const bPromiseResult = taskA(5, 1).then((a_res) => {
//   console.log("A RESULT : ", a_res);
//   return taskB(a_res);
// });

// console.log("bladfskladfsljf");
// console.log("bladfskladfsljf");
// console.log("bladfskladfsljf");
// console.log("bladfskladfsljf");
// console.log("bladfskladfsljf");

// bPromiseResult
//   .then((b_res) => {
//     console.log("B RESULT : ", b_res);
//     return taskC(b_res);
//   })
//   .then((c_res) => {
//     console.log("C RESULT : ", c_res);
//   });

//-----------------------------//

// Promise 사용

// function taskA(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a + b;
//       resolve(res);
//     }, 3000);
//   });
// }

// function taskB(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * 2;
//       resolve(res);
//     }, 1000);
//   });
// }

// function taskC(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * -1;
//       resolve(res);
//     }, 2000);
//   });
// }

// taskA(5, 1)
//   .then((a_res) => {
//     console.log("A RESULT : ", a_res);
//     return taskB(a_res);
//   })
//   .then((b_res) => {
//     console.log("B RESULT : ", b_res);
//     return taskC(b_res);
//   })
//   .then((c_res) => {
//     console.log("C RESULT : ", c_res);
//   });

//-----------------------------//

// function taskA(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a + b;
//       resolve(res);
//     }, 3000);
//   });
// }

// function taskB(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * 2;
//       resolve(res);
//     }, 1000);
//   });
// }

// function taskC(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const res = a * -1;
//       resolve(res);
//     }, 2000);
//   });
// }

// taskA(5, 1).then((a_res) => {
//   console.log("A RESULT : ", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("B RESULT : ", b_res);
//     taskC(b_res).then((c_res) => {
//       console.log("C RESULT : ", c_res);
//     });
//   });
// });
// // Promise객체와 그 메서인 then은 콜백함수를 쓰는 식으로 사용하게 되면
// // 콜백 지옥이 또 나타나게된다

// // // 콜백 지옥
// // taskA(3, 4, (a_res) => {
// //   console.log("task A : ", a_res);
// //   taskB(a_res, (b_res) => {
// //     console.log("task B : ", b_res);
// //     taskC(b_res, (c_res) => {
// //       console.log("task C : ", c_res);
// //     });
// //   });
// // });

//-----------------------------//

// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if (typeof number === "number") {
//       // 성공 -> resolve
//       resolve(number >= 0 ? "양수" : "음수");
//     } else {
//       // 실패 -> reject
//       reject("주어진 값이 숫자형 값이 아닙니다");
//     }
//   }, 2000);
// }

// function isPositiveP(number) {
//   const executor = (resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         console.log(number);
//         resolve(number >= 0 ? "양수" : "음수");
//       } else {
//         reject("주어진 값이 숫자형 값이 아닙니다");
//       }
//     }, 2000);
//   };

//   const asyncTask = new Promise(executor);
//   return asyncTask;
// }

// const res = isPositiveP([]);

// res
//   .then((res) => {
//     console.log("작업 성공 : ", res);
//   })
//   .catch((err) => {
//     console.log("작업 실패 : ", err);
//   });

//-----------------------------//

// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if (typeof number === "number") {
//       // 성공 -> resolve
//       resolve(number >= 0 ? "양수" : "음수");
//     } else {
//       // 실패 -> reject
//       reject("주어진 값이 숫자형 값이 아닙니다");
//     }
//   }, 2000);
// }

// function isPositiveP(number) {
//   const executor = (resolve, reject) => {
//     // 실행자
//     setTimeout(() => {
//       if (typeof number === "number") {
//         console.log(number);
//         resolve(number >= 0 ? "양수" : "음수");
//       } else {
//         reject("주어진 값이 숫자형 값이 아닙니다");
//       }
//     }, 2000);
//   };

//   const asyncTask = new Promise(executor);
//   // return asyncTask;
//   return asyncTask;
// }

// const res = isPositiveP(101);

// res
//   .then((res) => {
//     console.log("작업 성공 : ",res);
//   })
//   .catch((err) => {
//      console.log("작업 실패 : ",err);
//   });

//-----------------------------//

// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if (typeof number === "number") {
//       resolve(number >= 0 ? "양수" : "음수");
//     } else {
//       reject("주어진 값이 숫자형 값이 아닙니다");
//     }
//   }, 2000);
// }

// isPositive(
//   [],
//   (res) => {
//     console.log("성공적으로 수행됨 : ", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

//Promise---------------------------------------------------

// // 콜백함수에 콜백함수에 콜백함수를 넣어서
// // 비동기처리에 결과를 또 다른 비동기 처리에 값으로 전달
// // 콜백 헬, 콜백 지옥

// function taskA(a, b, cb) {
//   setTimeout(() => {
//     const res = a + b;
//     cb(res);
//   }, 3000);
// }

// function taskB(a, cb) {
//   setTimeout(() => {
//     const res = a * 2;
//     cb(res);
//   }, 1000);
// }

// function taskC(a, cb) {
//   setTimeout(() => {
//     const res = a * -1;
//     cb(res);
//   }, 2000);
// }

// taskA(4, 5, (a_res) => {
//   console.log("A RESULT : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("B RESULT : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("C RESULT : ", c_res);
//     });
//   });
// });

// console.log("코드 끝");

//-----------------------------//

// // 1초 뒤에 전달받은 파라미터에 곱하기 2를 하는 작업

// function taskA(a, b, cb) {
//   setTimeout(() => {
//     const res = a + b;
//     cb(res);
//   }, 3000);
// }

// function taskB(a, cb) {
//   setTimeout(() => {
//     const res = a * 2;
//     cb(res);
//   }, 1000);
// }

// function taskC(a, cb) {
//   setTimeout(() => {
//     const res = a * -1;
//     cb(res);
//   }, 2000);
// }

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT :", res);
// });

// taskB(7, (res) => {
//   console.log("B TASK RESULT :", res);
// });

// taskC(14, (res) => {
//   console.log("C TASK RESULT :", res);
// });

// console.log("코드 끝");

//-----------------------------//

// // taskA 함수가 두개의 파라미터를 받아서 setTimeout함수를 이용해서
// // 3초 뒤에 그 두개를 더한 값을 구하는 함수

// function taskA(a, b, cb) {
//   setTimeout(() => {
//     const res = a + b;
//     // (a + b)를 res라는 지역상수에 저장함
//     // 지역 상수란 스코프 안에서만 유효한 것
//     cb(res);
//     // 콜백함수 호출
//   }, 3000);
// }

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT : ", res);
// });
// console.log("코드 끝");

//-----------------------------//

// // 비동기적
// // 먼저 지시된 작업이 끝날 때까지 기다리지 않고
// // 다음 작업을 바로 시행하는 방식을 비동기 방식이라고 한다

// function taskA() {
//   setTimeout(() => {
//     console.log("A TASK END");
//   }, 2000);
//   // A TASK END가 더 먼저 실행됐지만 2000ms를 기다리기 전에 아래가 먼저 실행됨
//   // 타이머를 만들 수 있는 내장 비동기 함수
//   // 자바스크립트에는 두개의 파라미터가 들어감
//   // 두개의 파라미터 처음은 콜백함수 두번째는 딜레이타임 (ms 단위로 전달)
// }

// taskA();
// console.log("코드 끝");
// // 위에 2000ms를 기다리기 전에 아래 console.log가 먼저 실행됨

//-----------------------------//

// // 동기적 방식
// // taskA 함수가 종료되기 전까지는 console.log라는 함수는 실행될 수가 없다

// function taskA() {
//   console.log("A 작업 끝");
// }
// taskA();
// console.log("코드 끝");

//동기 & 비동기---------------------------------------------------

// // 배열에 spread 연산자 사용하기

// const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
// const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

// const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
// // spread연산자를 이용하면 객체의 프로포티를 펼치는 것처럼 배열의 원소를 순서대로 펼칠 수 있다
// console.log(allCookies);

//-----------------------------//

// // 세가지 쿠키를 객체로 만들기
// // spreaad 연산자 이용 === 객체에 중복되는 요소를 펼침

// const cookie = {
//   base: "cookie",
//   madeIn: "korea"
// };

// const chocochipCookie = {
//   ...cookie,
//   // spread 연산자 => 펼치는 연산자 => 객체의 값을 새로운 객체에 펼쳐주는 역할
//   toping: "chocochip"
// };

// const blueberryCookie = {
//   ...cookie,
//   toping: "blueberry"
// };

// const strawberryCoookie = {
//   ...cookie,
//   toping: "strawberry"
// };

// console.log(chocochipCookie);
// console.log(blueberryCookie);
// console.log(strawberryCoookie);

//-----------------------------//

// // spread 연산자 사용 전

// const cookie = {
//   base: "cookie",
//   madeIn: "Korea"
// };

// const chocochipCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "chocochip"
// };
// const blueberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "blueberry"
// };

// const strawberryCoookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "strawberry"
// };

//Spread 연산자---------------------------------------------------

// // 키값이 강제되는 것을 극복하기 위함
// let object = { one: "one", two: "two", three: "three", name: "이정환" };

// let { name: myName, one: oneOne, two, three, abc = "router" } = object;
// // name이라는 키값을 기준으로 value를 myName이라는 변수에 할당하겠다
// console.log(oneOne, two, three, myName, abc);

//-----------------------------//

// // 객체의 비구조화 할당
// // 비구조화 할당 활용 후

// let object = { one: "one", two: "two", three: "three", name: "이정환" };

// let { name, one, two, three } = object;
// // 배열의 인덱스를 이용하는게 아니라 키값을 기준으로
// // 변수명이 키값으로 강제되는 한계가 있다
// console.log(one, two, three, name);

//-----------------------------//

// 비구조화 할당 활용 전

// let object = { one: "one", two: "two", three: "three" };

// let one = object.one;
// let two = object.two;
// let three = object.three;

// console.log(one, two, three);

//-----------------------------//

// // 두개 변수를 서로 바꾸는 스왑이라는 것에도 활용 가능
// // 비구조화 활용 후

// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// // 배열의 비구조화 할당 활용
// console.log(a, b);

//-----------------------------//

// // 바구조화 활용 전

// let a = 10;

// let b = 20;

// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

//-----------------------------//

// // 배열의 선언 분리 비구조화 할당

// let [one, two, three, four = "four"] = ["one", "two", "three"];
// // 마지막 four라는 변수는 할당되지 못하기 때문에 undefine이라고 반환된다
// // 기본값 설정을 위해 변수에 ="기본값"을 하면 할당되지 못하는 것을 해결할 수 있음

// console.log(one, two, three, four);

//-----------------------------//

// // 비구조화 할당 적용하기

// let arr = ["one", "two", "three"];

// let [one, two, three] = arr;
// // arr이라는 배열에 0번째 인덱스는 one이라는 변수 1번째 인덱스는 two,
// // 2번째 인덱스에는 three라는 함수가 할당되도록
// // 대괄호를 이용해서 배열의 값을 순서대로 할당받아서 사용할 수 있는 방법을 비구조화 할당
// // === 배열의 기본변수 비구조화 할당

// console.log(one, two, three);

//-----------------------------//

// let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

//비 구조화 할당---------------------------------------------------

// // 객체 프로포티에 접근하는 괄호 표기법을 이용
// const meal = {
//   한식: "불고기",
//   중식: "멘보사",
//   일식: "초밥",
//   양식: "스테이크",
//   인도식: "카레"
// };

// const getMeal = (mealType) => {
//   return meal[mealType] || "굶기";
// };

// console.log(getMeal("한식"));
// console.log(getMeal());

//-----------------------------//

// // 한식인지 양식인지 중식인지 일식인지를 받고 각 음식의 대표 메뉴 리턴

// const getMeal = (mealType) => {
//   if (mealType === "한식") return "불고기";
//   if (mealType === "양식") return "파스타";
//   if (mealType === "중식") return "멘보사";
//   if (mealType === "일식") return "초밥";
//   return "굶기";
// };

// console.log(getMeal("한식"));
// console.log(getMeal("중식"));
// console.log(getMeal());

//-----------------------------//

// // // 주어진 문자열이 한식 종류에 해당하는지 검사하는 함수 2

// function isKoreanFood(food) {
//   if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
//     // food라는 파라미터가 이 배열안에 존재하면 true, 존재하지 않으면 false를 리턴
//     return true;
//   }
//   return false;
// }

// const food1 = isKoreanFood("불고기");
// const food2 = isKoreanFood("파스타");
// console.log(food1);
// console.log(food2);

//-----------------------------//

// // 주어진 문자열이 한식 종류에 해당하는지 검사하는 함수

// function isKoreanFood(food) {
//   if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
//     return true;
//   }
//   return false;
// }

// const food1 = isKoreanFood("불고기");
// const food2 = isKoreanFood("파스타");
// console.log(food1);
// console.log(food2);

//조건문 업그레이드----------------------------------------------------

// // truthy와 falsy를 이용한 단락회로 평가 응용
// // 원래의 함수처럼 전달 받은 값이 falsy한 값일 때 그 값을 그대로 반환하지 않고
// //"객체가 아닙니다"라는 값을 반환

// const getName = (person) => {
//   const name = person && person.name; // 이정환
//   // person이 undefine이 아니기 때문에 person이 truthy여서 그 다음으로 넘어가고
//   // person.name이 truthy여서 person.name의 값을 반환한다
//   return name || "객체가 아닙니다";
//   // name이 이정환이라는 값은 빈 문자열이 아니기 때문에 truthy하다
//   // truthy하기 때문에 이 뒤에 값을 볼 필요가 없다
//   // OR의 단락회로 평가는 앞에가 truthy하거나 true하면
//   // 그 값을 반환하는 걸로 종료하기 때문
// };

// // let person = { name: "이정환" };
// let person = null;
// const name = getName(person);
// console.log(name);

//-----------------------------//

// // truthy와 falsy를 이용한 단락회로 평가 응용 => 함수를 포함한 프로그램

// const getName = (person) => {
//   return person && person.name;
//   // 앞에 값이 undefine으로 falsy한 값이기 때문에 뒤에를 볼 필요 없이
//   // person의 값을 반환한다.
// };

// let person;
// const name = getName(person);
// console.log(name);

//-----------------------------//

// // 주어진 객체에서 name이라는 프로포티를 반환하는 getName이라는 함수를 생성
// // 이것을 단락회로 평가 방법을 이용하여 위의 코드 처럼 더욱 더 단축하여 사용 가능하다
// const getName = (person) => {
//   if (!person) {
//     return "객체가 아닙니다";
//   }
//   return person.name;
// };

// let person;
// const name = getName(person);
// console.log(name);

//-----------------------------//

// // 논리 연산자 복습 및 단락회로 평가

// // console.log(true && true);
// console.log(false && true); // 단락회로 평가
// // 단락회로 평가는 왼쪽에서 오른쪽으로 연산하게되는 논리연산자의 연산 순서를 이용
// // 첫번째 피연산자가 false가 되버리면 뒤에있는 피연산자는 볼 필요가 없게 된다
// // 왜냐? "&&"연산자는 한쪽이라도 false이면 false이기 때문에
// // 피연산자 중에 뒤에 위치한 피연산자를 확인할 필요 없이
// // 그냥 연산을 끝내버리는 경우를 단락회로 평가라고 한다

// // console.log(true || false);
// console.log(true || false); // 단락회로 평가

// // console.log(!true);

//단락회로 평가----------------------------------------------------

// // 학점 계산 프로그램 if문으로 작성해보기
// let score = 40;

// if (score >= 90) {
//   console.log("A+");
// } else if (score >= 50) {
//   console.log("B+");
// } else {
//   console.log("F");
// }

//-----------------------------//

// // 삼항 연산자 중첩하여 사용 === TODO : 학점 계산 프로그램
// // 90점 이상 A+
// // 50점 이상 B+
// // 둘 다 아니면 F

// let score = 100;

// score >= 90
//   ? console.log("A+")
//   : score >= 50
//   ? console.log("B+")
//   : console.log("F");
// // 중첩으로 사용할 때는 if문으로 사용하는 것이 좋다

//-----------------------------//

// // 주어진 값이 null이거나 undefine이 아닌지를 판단하는 프로그램

// let a = [];
// // let a;

// const result = a ? true : false;

// console.log(result);

//-----------------------------//

// // 값을 참일때와 거짓일때를 구분해서 반환

// let a = [1, 23];

// const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";

// console.log(arrayStatus);

//-----------------------------//

// // 삼항 연산자 이용
// let a = [];

// a.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

//-----------------------------//

// // 주어진 배열이 비어져있는지 확인

// let a = [];

// if (a.length === 0) {
//   console.log("빈 배열");
// } else {
//   console.log("안 빈 배열");
// }

//-----------------------------//

//삼항 연산자 이용

// let a = 3;

// a >= 0 ? console.log("양수") : console.log("음수");
// // 조건식 -> "?"(이 앞까지가 조건식이다) -> 참일 때 수행할 식 -> ":"
// // -> 거짓일 때 수행할 식 -> ";"으로 마무리

//-----------------------------//

// // 기본 조건문

// let a = 3;
// if (a >= 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }

//삼항 연산자----------------------------------------------------

// //한번에 적용시키고 싶을 때

// const getName = (person) => {
//   if (!person) {
//     // false + NOT => True
//     return "객체가 아닙니다";
//   }
//   return person.name;
// };

// let person = undefined;
// const name = getName(person);
// console.log(name);

//-----------------------------//

// // 다른 것도 적용시키고 싶을 때

// const getName = (person) => {
//   if (person === undefined || person === null) {
//     return "객체가 아닙니다";
//   }
//   return person.name;
// };

// let person = null;
// const name = getName(person);
// console.log(name);

//-----------------------------//

// undefine일 때

// const getName = (person) => {
//   if (person === undefined) {
//     // undefine을 조건문을 통해 전달받은 파라미터가 객체인지 또는 undefine은 아닌지 null은 아닌지 판단해야함
//     return "객체가 아닙니다";
//   }
//   return person.name;
//   //위에 조건에 충족하여 해당 실행문이 실행되지 않게 한다.
// };

// let person;
// // person이라는 값을 undefined로 전달하려면 점 표기법을 사용하면 안된다
// // undefine은 객체가 아니기 때문에 내부 프로포티에 접근 불가
// const name = getName(person);
// console.log(name);

//-----------------------------//

// const getName = (person) => {
//   return person.name;
// };

// let person = { name: "이정환" };
// const name = getName(person);
// // getName이라는 함수에 전달하는 person 파라미터가
// // name이라는 프로포티를 갖고 있는 객체를 전달

// console.log(name);

//-----------------------------//

// let a = null;
// // 거짓이 아니야도 거짓으로 분류되는 falsy

// if (a) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

//-----------------------------//

// let a = [];
// // 참이 아니여도 참으로 분류하는 값들을 참 같은 값이라고 하여 truthy

// if (a) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

//Truthy & Falsy----------------------------------------------------

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
