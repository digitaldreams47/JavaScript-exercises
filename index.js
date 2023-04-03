/* Variables

 let studentAge = 21; // number
 let firstName = "Hila Serban"; // numbers
 let student = false; // boolean

 studentAge += 1;


 console.log("Hello " + firstName);
 console.log("You are: " + studentAge + " years old");
 console.log("Enrolled: " + student);

 document.getElementById("p1").innerHTML = "Hello, " + firstName;
 document.getElementById("p2").innerHTML = "You are, " + studentAge + " years old";
 document.getElementById("p3").innerHTML = "Enrolled: " + student;

 Arithmetic expressions

 let students = 20;

students += 1;
students -= 1;
students *= 1;
students /= 1;
let extraStudents;
extraStudents = students % 3;

console.log("students: " + students);
console.log("extraStudents: " + extraStudents);


let result = 1 + 2 * (3 + 4);
console.log("result: " + result);

*/

/* Accept user input

 let userName = window.prompt("What`s your name?");
 console.log("userName: " + userName);
 let userName;

 document.getElementById("myButton").onclick = function(){
   userName = document.getElementById("textName").value;
   console.log("userName: " + userName);
   document.getElementById("myLabel").innerHTML = "Hello " + userName + ":";
 }



 document.getElementById("textName").value = "Serban";

 */

/* Type Conversions
 user input is a string

 let age = window.prompt("How old are you?");

 console.log(typeof age);

  age = Number(age);
  age += 1;

console.log("Age: " + age);

 let x;
 let y;
 let z;

 x = Number("3.14");
 y = String(3.14);
 z = Boolean("");

 console.log(x, typeof x);
 console.log(y, typeof y);
 console.log(z, typeof z);

*/

/* Const variable = a variable that cannot be changed

 const PI = 3.14159;
 let radius;
 let circumference;

 radius = window.prompt("Enter the radius of a circle: ");
 radius = Number(radius);

 circumference = 2 * PI * radius;

 console.log("Circumference is :" + circumference);

*/

/* Math object

 let x = -3.14;
 let y = 5;
 let z = 9;
 let maximum;
 let minimum;

 x = Math.round(x); // round to nearest
 x = Math.floor(x); // round to floor 
 x = Math.ceil(x); // round to ceil
 x = Math.pow(x, 5);
 x = Math.sqrt(x);
 x = Math.abs(x);
 maximum = Math.max(x, y);
 minimum = Math.min(x, y);
 console.log(maximum);
 console.log(minimum);

 x = Math.PI;
 console.log(x)

*/

/* Hypotenuse of a right angle triangle

 let a;
 let b;
 let c;

a = window.prompt("Enter side A: ");
a = Number(a);

b = window.prompt("Enter side B: ");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Hypotenuse is : " + c);

 document.getElementById("submitButton").onclick = function(){
   a = document.getElementById("aTextBox").value;
   a = Number(a);

   b = document.getElementById("bTextBox").value;
   b = Number(b);

   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

   document.getElementById("cLabel").innerHTML = "Side C: " + c;
 }
*/

/* Count program

 let count = 0;

 document.getElementById("decreaseBtn").onclick = function(){
   count -= 1;
   document.getElementById("countLabel").innerHTML = count;
 }

 document.getElementById("resetBtn").onclick = function(){
   count = 0;
   document.getElementById("countLabel").innerHTML = count;
 }

  document.getElementById("increaseBtn").onclick = function(){
   count += 1;
   document.getElementById("countLabel").innerHTML = count;
 }
*/

/* Random number generator 
let x;
let y;
let z;


document.getElementById("rollButton").onclick = function() {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
}

*/

/* Useful String properties and methods

let userName = "Hila Serban Mihai";
let phoneNumber = "0756-16-09-73";
const nameLength = userName.length;
console.log(nameLength);

let firstLetter = userName.charAt(5);
console.log(firstLetter);

console.log(userName.indexOf("M"));
console.log(userName.lastIndexOf("a"));

userName = userName.trim();
userName = userName.toLowerCase();
userName = userName.toUpperCase();

phoneNumber = phoneNumber.replaceAll("-", " ");
console.log(phoneNumber);

*/

/* Slice method slice()

let fullName = "Hila Serban Mihai";
let firstName;
let lastName;

lastName = fullName.slice(5);
firstName = fullName.slice(0, 4);
lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(lastName);
console.log(firstName);

*/

/* Method chaining 

let userName = "hila";
let letter = userName.charAt(0).toUpperCase();
console.log(letter);

*/

/* if else statements 

 let age = -1;

if (age >= 18){
  console.log("You are an adult");
} else if (age < 0){
  console.log("You haven`t been born");
}
else {
  console.log("You are child");
}

let online = true;

if (online) {
  console.log("You are online");
} else {
  console.log("You are not online");
}

*/

/* Checked property 


document.getElementById("myBtn").onclick = function() {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckBox.checked) {
    console.log("You are subscribed");
  }
  else {
    console.log("You are not subscribed");
  }

  if (visaBtn.checked) {
    console.log("You are paying with visa card");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with mastercard");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal");
  } else {
    console.log("You must select a payment method!")
  }
}

*/

/* Switches 

let grade = "4.5";

switch (grade) {
  case "10": 
    console.log("You have maximum grade");
    break;
  case "8":
    console.log("You did good!");
    break;
  case "6":
    console.log("You did okay!");
    break;
  case "4.5":
    console.log("You passed ...");
    break;
  case "2":
    console.log("You Failed!");
    break;
  default:
    console.log(grade + " is not valid.");
}

*/

// Logical operators

/* And and OR
let temp = 15;
let sunny = true;

if ((temp > 0) && temp < 25 && sunny) {
  console.log("Is cold outside");
} else {
  console.log("Is hot outside");
}
*/

/* ! NOT

let temp = 10;
let sunny = true;

if (!(temp > 0)) {
  console.log("Is cold outside");
} else {
  console.log("Is hot outside");
}

if (!sunny) {
  console.log("It s sunny outside");
} else {
  console.log("It s cloudy outside");
}

*/

/* while loop

let userName = "";

while (userName == "" || userName == null) {
  userName = window.prompt("Enter your name");
}

console.log("Hello, " + userName);

*/

/* do while loop

let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName == "") 

console.log("Hello, " + userName);

*/

/* for loops

for(let i = 0; i <= 10; i++) {
  console.log(i);
}

*/

/* break and continue 

for (let i = 1; i <= 20; i++) {
  // if (i == 12){
  //   break; // break loop
  // }
  if (i == 14) {
    continue; // continue loop
  }
  console.log(i);
}

*/

/* neste loops

let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt('Enter number of rows');
let columns = window.prompt('Enter number of columns');

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}

*/

/* functions 

let userName;
let age;
happyBirthday("Hila Serban", 25);

function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear " + userName);
  console.log("Happy birthday to you!");
  console.log("You are " + age + " years old");
}

// return 

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log(area);

function getArea(width, height) {
  let result = width * height;
  return result;
}
*/

/* ternary operatior

let adult = checkAge(10);
console.log(adult);

function checkAge(age) {
  return age >= 18 ? true : false;
}

*/

/* template literals (`)

let userName = "Hila Serban";
let items = 3;
let total = 55;

// console.log("Hello, ", userName);
// console.log("You have", items, "items in your collection");
// console.log("Your total is $", total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items}`);
// console.log(`Your total is ${total}`);

// const text = 
// `Hello ${userName}<br>
// You have ${items}<br>
// Your total is ${total}
// `

// document.getElementById('myLabel').innerHTML = text;

*/

/* toLocaleString() 

// number.toLocaleString(locale, {options})
// 'locale' specify the language
// 'options' object formatting options

let myNumber = .12;
// myNumber = myNumber.toLocaleString("en-US"); // US english
// myNumber = myNumber.toLocaleString("hi-IN"); // Hindi
// myNumber = myNumber.toLocaleString("de-DE"); // German

// myNumber = myNumber.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNumber = myNumber.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNumber = myNumber.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNumber = myNumber.toLocaleString(undefined, {style: "percent"});

// myNumber = myNumber.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log("Number: " + myNumber);

*/