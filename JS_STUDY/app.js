//ㅡ#3.8ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     // const clickedClass = "clicked";
//     h1.classList.toggle("clicked");
//     // toggle이란 토큰이 존재한다면 토큰을 제거하고 존재하지 않는다면 토큰을 추가함
//     // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
//     // 만약 있다면 toggle이 clicked를 제거해줌
//     // 만약 h1의 classList에 clicked가 존재하지 않는다면,
//     // toggle은 clicked를 classList에 추가해줌
// }

// h1.addEventListener("click", handleTitleClick);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)) { 
//         const clickedClass = "clicked";
//         h1.classList.toggle(clickedClass);

//         // // classList는 class들을 목록으로 작업할 수 있게 허용해줌
//         // // element의 class 내용물을 조작하는 것을 허용
//         // // classList가 clicked를 포함하고 있는지만을 확인
//         h1.classList.remove(clickedClass);
//         // // 만약 clickedClass가 h1의 classList에 포함되어 있다면,
//         // // clickesClass를 제거해라
//     }
//     else {
//         h1.classList.add(clickedClass)
//         // // 만약 clickedClass가 h1의 classList에 포함되어 있지 않다면,
//         // // clickesClass를 추가해라
//     }
//   } 
    
//     h1.addEventListener("click", handleTitleClick);

//ㅡ#3.7ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //element에서 className을 변경하고, 제거하고, 추가하는 법

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked nice-font"; // string을 변수에 저장하여 실수 줄이기
//     if(h1.className === clickedClass) { // (=)부호가 3개라면 className이 active와 같은지 확인
//         h1.className = ""; // (=)부호가 한개라면 해당 값을 ("")이 안의 값으로 변경 
//     }
//     else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleTitleClick);

//ㅡ#3.6ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const h1  = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//         const currentColor = h1.style.color; // color의 현재값(상태)를 저장
//         let newColor;
//     if(h1.style.color === "blue") { // h1.style.color의 값을 검사해서 만약 blue라면 tomato
//         newColor = "tomato";
//     }
//     else { // 그게 아니라면 blue
//         newColor = "blue"; 
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

//ㅡ#3.5ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     h1.style.color = "blue";
// }
// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize() { // 윈도우(페이지)의 크기를 변경함에 따라 배경색이 바뀜
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() { // 윈도우(페이지)를 ctlr+c 복사를 시도했을 경우 알림창
//     alert("copier!");
// }
// function handleWindowOffline() { // 윈도우(페이지)에서 와이파이가 끊겼을 때 알림
//     alert("SOS no WIFI");
// }
// function handleWindowOnline() { // 윈도우(페이지)에서 와이파이가 연결되었을 때 알림
//     alert("ALL GOOOOD")
// }

// //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// h1.addEventListener("click", handleTitleClick);
// // h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter", handleMouseEnter);
// // h1.onmouseenter = handleMouseEnter;

// h1.addEventListener("mouseleave", handleMouseLeave);
// // h1.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//ㅡ#3.4ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleClick() {
//     title.style.color = "blue";
// }
// function handleMouseEnter() {
//     title.innerText = "Mouse is here!";
//     console.log("Mouse is here");
// }
// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
//     console.log("Mouse is gone")
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

//ㅡ#3.3ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // 웹사이트에서 click event를 감지하는 법 (event를 listen하는 법)
// // HTMl element를 가져와서, addEventListener function을 실행시켜주면 되는데, 이곳에 어떤

// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
//     title.style.color = "blue";
// }

// // console.dir(title); // console 창에 뜨는 항목들이 전부 JavaScript object임
//                     // JavaScript object 내부에 있는 property들의 값들을 변경할 수 있음
// // console.log(title);
// // title.innerText = "Hello";
// // title.style.color   = "blue";
// title.addEventListener("click", handleTitleClick);
// // function을 바로 실행 시키고 싶으면 handleTitleClick() 이 형태지만
// // 바로 실핼시키는게 아니라 유저가 title을 click할 경우에 javascript가 나 대신
// // 실행버튼을 눌러주게 하는거니까 위와 같은 형태로 "click" 뒤에 쓰는거다

//ㅡ#3.2ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // getElementByClassName는 array를 가져다줌
// // getElementByTagName은 array를 가져다줌
// // querySelector는 Css Selector를[ ex)h1:first-child, .hello h1, #hello ] 
// // 사용하여 검색할 수 있음
// // querySelector는 첫번째로 검색된 하나의 element만 반환해줌

// const title = document.querySelectorAll(".hello h1");
// // === const title = document.getElementById("hello");
// //querySelector는 첫번째 element만 가져온다
// //element를 모두 가져오고 싶으면 querySelectorAll을 사용해야한다

// console.log(title);

// // const hellos = document.getElementsByClassName("hello");

// // console.log(hellos)


//ㅡ#3.1ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // HTML코드와 HTML element를 Javascript로 접근하는 방법
// // getElementById란 함수를 통해 id로 element를 가져올 수 있음
// // JavaScript에서 Html을 가져올 수 있는 다른 방법
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);
// // console.log(title)

//ㅡ#3.0ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// // Js는 Html을 읽어옴 -> 자동
// // 브라우저가 Html 정보가 아주 많이 들어있는 document라는 object를 전달해줌
// // Js는 Html 이미 연결되어있다
// // 모든 것은 document로 시작 = 문서를 뜻함

// document.title ="Hello! From JS!";

//ㅡ#2.16ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const age = parseInt(prompt("How old are you"));

// if(isNaN(age) || age < 0) { 
//     // isNaN은 boolean을 반환 / age의 value를 확인 / Or,And
//     console.log("Please write a real positive number");
// }
// else if(age < 18) {
//     console.log("You are too young");
// }
// else if(age >= 18 && age <= 50) {
//     console.log("You can drink");
// }
// else if(age > 50 && age <= 80) {
//     console.log("You should exercise");
// }
// else if(age === 100) {  // !== 같다 / === 아니다
//     // 아래줄에 위치할 경우 80세 이상이면 위에 명령이 실행되기 때문에 
//     // 이 else if문은 실행되지 않는다
//     console.log("wow you are wise");
// }
// else if(age > 80) {
//     console.log("You can do whatever you want");
// }

// // if((a && b) || (c && d) || (x || w)) {
     
// // }


//ㅡ#2.15ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 

// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// }
// else if(age < 18){
//     console.log("You are too young");
// }
// else if(age >= 18 && age <=50) { // && == And연산자 , || == Or 연산자
//     console.log("You can drink")
// }
// else if(age >= 51 && age <= 80){
//     console.log("You should exercise");
// }
// else if(age > 80) {
//     console.log("You can do whatever you want");
// }

//ㅡ#2.14ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const age = parseInt(prompt("How old are you?"));

// // console.log(isNaN(age));
// // //isNaN = number가 아닌것이 아니란 뜻 = 숫자라는 뜻

// if(isNaN(age)) { //condition은 boolean으로 판별 가능해야함 (true or false)
//     // condition == true
//     console.log("Please write a number");
// }
// else {
//     // condition == false
//     console.log("Thank you for writing your age");
// }

//ㅡ#2.13ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const age = prompt("How old are you?"); 
// // prompt는 JS코드의 실행을 멈추게 함 + 어떤 스타일(CSS)도 적용할 수 없다

// const age = parseInt(prompt("How old are you?")); 
// console.log(age);

// console.log(age, parseInt(age));

// console.log(typeof "15",  typeof parseInt("15"));
// // -> parseInt = String을 number로 변환해줌
// // String이면 수의 크기를 비교할 수 없기 때문에 number 형태로 바꿔주어야 함
// // 숫자가 아닌 문자를 입력하면 NaN(not a number)이 나오면서 숫자가 아님을 알려줌

//ㅡ#2.12ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡaaㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {12
//     plus: function(a, b) {
//         console.log("hello");
//         return a + b; //return하는 순간 function은 종료된다.
//         console.log("bye bye"); //그래서 그 아래에 있는 코드들은 실행되지 않음
//     },
//     minus: function(a, b) {
//         return a - b;
//     }, 
//     times: function(a,b) {
//         return a * b;sds
//     },
//     divide: function(a, b) {
//         return a / b; 
//     },
//     power: function(a, b) {
//         return a ** b; 
//     },
// };

// const plusResult = calculator.plus(2, 3);

//ㅡ#2.11ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {
//     plus: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     }, 
//     times: function(a,b) {
//         return a * b;
//     },
//     divide: function(a, b) {
//         return a / b; 
//     },
//     power: function(a, b) {
//         return a ** b; 
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timeResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timeResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(plusResult, minusResult, timeResult, divideResult, powerResult);

//  //어떤 값을 처리하고 그 결과를 return하기 위해 function을 사용
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return "hello";
// }
// const krAge = calculateKrAge(age);

// console.log(krAge);

//ㅡ#2.10ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {
//     plus: function(a, b) {
//         alert(a + b);
//     },
//     minus: function(a, b) {
//         alert(a - b);
//     }, 
//     times: function(a,b) {
//         alert(a * b);
//     },
//     divide: function(a, b) {
//         alert(a / b)
//     },
//     powerof: function(a, b) {
//         alert(a ** b)
//     },
// };
// calculator.add(5, 1);
// calculator.minus(5, 1);
// calculator.divide(5,2);
// calculator.powerof(2,10)


// //function 복습 (object, function 다루는 법, function에 data를 어떻게 보내는지)
// function plus(a, b) {
//     console.log(a + b);
// }
// plus(5, 10);
///
// function minusFive(a) {
//     console.log(a - 5);
// }
// minusFive(4);


// //object 복습
// const player = {
//     name: "Nico",
//     age: 98,
// }
// console.log(player);
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon"; 
// console.log(player, console);

//ㅡ#2.9ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy[2]);
// console.log(toBuy);

// toBuy[2] = "water"; //toBuy의 2번 인덱스에 값을 설정
// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);

// const me = "sexy";
// const days = [1, 2, false, true, null, undefined, "text", me];

// const a = 5; //주로 const 사용하기 
// //true flase, 1 0, on off와 같이 두가지 옵셥만 있는것들을 boolean이라고 함
// //null variable 안에 아무것도 없다는 것을 확실히 하고 싶으면 null
// //undefine은 변수에 값을 부여하지 않은 상태
// let isNicoFat = true; //let은 variable 업데이트 가능 //var은 절대 사용 X

// isNicoFat = false; //variable을 만드는게 아니라 업데이트 하는 것이기 때문에 let을 붙일 필요 X
// console.log(a);

//ㅡ#2.8ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// function plus(a,b) { //function이 그 데이터를 받는 방법
//     console.log(a + b);
// }
// plus(5, 5); //데이터를 function 안으로 보내는 방법

// const player = {
//     name: "sunmin",
//     sayHello: function(otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you");
//     },
// };

// player.sayHello("lynn");
// player.sayHello("sunmin");

// function plus(firstNumber, seondNumber) {
//     console.log(firstNumber + seondNumber);
// }
// function divide(a, b) {
//     console.log(a / b);
// }

// plus(60, 8);
// divide(98, 20);


// //function 사용 시
// function sayHello(nameOfPerson, age) {
//    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// alert();
// console.log("hello");

// sayHello("sunmin", 19);
// sayHello("dal", 23);
// sayHello("nico", 21);

// sayHello();
// sayHello();
// sayHello();
// sayHello();


// //funtion 없이 기본 인삿말 + 닉네임을 할 경우 -> 좋은 코드가 아님
// console.log("Hello my name is sunmin");
// console.log("Hello my name is nico");
// console.log("Hello my name is dal");
// console.log("Hello my name is flynn");
// console.log("Hello my name is nana");

//ㅡ#2.7ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const player = {
//     name: "sunmin",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// console.log(player);
// player.fat = false; //const 안에 있는 것을 업데이트하는것은 가능
// player.lastName = "potato"; //const에 존재하지 않는 것도 추가 가능
// player.points = player.points + 15;
// console.log(player.points);
// console.log(player);
// player.name

// const playerName = "sunmin";
// const playerPoints = 121212;
// const playerHandsome = flase;
// const playerFat = "little bit";

// const player = ["sunmin", 1212, flase, "little bit"]; //각각이 뭔지 안써져 있어서 좋은 코드는 아님

// player.name
// player.points
// player.hansome


//ㅡ#2.6ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);

//ㅡ#2.5ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"]; 

// //Get Item from Array
// console.log(daysOfWeek);

// //Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

//ㅡ#2.4ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const amIFat = null;
// let something;
// console.log(something, amIFat);

//ㅡ#2.3ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const a = 5;
const b = 2;

let myName = "sunmin"; //variable 업데이트 가능

console.log(a+b);
console.log(a*b);
console.log(a/b); 
console.log("hello " + myName)
 
myName = "SunMin"; //업데이트 함
console.log("your new name is " + myName);