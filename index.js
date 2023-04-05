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

/* Number guessing game

const answer = Math.floor((Math.random() * 10 + 1));
let guesses = 0;

document.getElementById("submitBtn").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too small! Please try again");
  }
  else {
    alert("Too large! Please try again");
  }
}

*/


/* Temperature conversion program

document.getElementById("submitButton").onclick = function() {
  let temp;
  
  if (document.getElementById("celsiusButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("fahrenheitButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } 
  else {
    document.getElementById("tempLabel").innerHTML = "Please select a unit to convert";
  }
}

function toCelsius (temperature) {
  return (temperature - 32) * (5 / 9);
}

function toFahrenheit (temperature) {
  return temperature * 9 / 5 + 32;
}

*/

// arrays 

/* some arrays methods 
let fruits = ["apple", "orange", "banana"];

fruits.push("lime"); // add an element
fruits.pop(); // remove last element
fruits.unshift("mango"); // add element to beginning
fruits.shift(); // remove first element

console.log(fruits);
console.log(fruits.length); // length of fruits
console.log(fruits.indexOf("apple")); // index of apple

*/

/* loop through array

let prices = [5, 10, 15, 25, 30];

// for(let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
// }

for(let price of prices) {
  console.log(price);
}

*/

/* sort array 

let fruits = ["banana", "tomato", "mango", "apple", "berry"];
// fruits = fruits.sort(); // sort by name
fruits = fruits.sort().reverse(); // reverse
for(let fruit of fruits) {
  console.log(fruit);
}
*/

/* 2d array

let fruits = ["bananas", "tomatoes", "mangos", "apples"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][3] = "mangos";

for(let list of groceryList) {
  for(let food of list) {
    console.log(food);
  }
}
*/

/* spread operator ... 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Math.max(...numbers));

let class1 = ["Hila", "Serban", "Mihai"];
let class2 = ["Carmen", "Calin", "George"];

class1.push(...class2);
console.log(...class1);

*/

/* rest parameters 

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;

console.log(sum(a,b,c,d,e,f));

function sum(...numbers) {
  let total = 0;
  for(let number of numbers) {
    total += number;
  }
  return total;
}
*/

/* callback 

sum(2,3, displayDOM);

function sum(x,y, callback){
  let result = x + y;
  callback(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
*/

/* arrat.forEach() 

let students = ["serban", "adrian", "john", "robert"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element);
}

*/

/* array.map() 

let numbers = [1,2,3,4,5,6,7,8,9,10];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

// squares.forEach(print);
cubes.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

function print (element) {
  console.log(element);
}

*/

/* array.filter() 

let ages = [18, 20, 12, 90, 55, 24];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}

*/

/* array.reduce() 

let prices = [2, 5, 10, 20, 30, 23, 50, 55];
let total = prices.reduce(checkOut);

console.log(`The total is: ${total}`);

function checkOut(total, element){
  return total + element;
}

*/

/* sort an array of numbers 

let grades = [100, 40, 70, 55, 23, 25, 95];

grades = grades.sort(ascendingSort);
grades.forEach(print);

function descendingSort(x,y){
  return y - x;
}

function ascendingSort(x,y){
  return x - y;
}

function print(element){
  console.log(element);
}

*/

/* function expression = function without a name 

// const greeting = function(){
//   console.log("hello");
// }

// greeting();

let count = 0;

document.getElementById("increaseBtn").onclick = function(){
  count++;
  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
  count--;
  document.getElementById("myLabel").innerHTML = count;
}

*/

/* arrow function => 

const greeting = userName => console.log(`Hello ${userName}`);
greeting("Serban");

const percent = (x, y) => x / y * 100;
console.log(`${percent(75, 150)}`);

let grades = [100, 33, 26, 70, 56, 66];

grades.sort((a, b) => b - a);
grades.forEach(grade => console.log(grade));

*/

/* shuffle array 

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
// console.log(cards);
cards.forEach(card => console.log(card));

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex--;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
*/

/* nested functions - function inside other function 

let userName = "Hila Serban";
let userInbox = 0;
login();
// displayUserInbox(); - must be called login() first
// displayUserName();

function login () {
  displayUserInbox();
  displayUserName();
  function displayUserName () {
    console.log(`Hello ${userName}`);
  }
  
  function displayUserInbox () {
    console.log(`You have ${userInbox} new messages`);
  }
}

*/

/* maps - hold key-value pair of any data type 

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 33],
  ["socks", 11],
  ["scarf", 22]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("scarf");

store.set("hat", 45);
store.delete("t-shirt");
console.log(store.has("t-shirt"));
console.log(store.size);

console.log(shoppingCart);
store.forEach((value, key) => console.log(`${key} ${value} lei`));

*/


/* objects - group of properties and methods 

const car = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive : function() {
     console.log(`You drive the car ${car.model}`);
  },
  brake: function() {
    console.log("You step on the breaks");
  }
}

const car2 = {
  model: "Dacie",
  color: "blue",
  year: 2025,

  drive : function() {
     console.log(`You drive the car ${car.model}`);
  },
  brake: function() {
    console.log("You step on the breaks");
  }
}

car.drive();
console.log(car2.model);

*/

/* this keyword - reference to particular object 

const phone1 = {
  model: "Iphone 13 Pro",
  color: "blue",
  year: 2022,

  turnOn : function () {
    console.log(`You have successfully turned on your ${this.model}`);
  },

  shutDown : function () {
    console.log(`You have successfully shut down on your ${this.model}`);
  }
}

const phone2 = {
  model: "Samsung S22",
  color: "black",
  year: 2022,

  turnOn : function () {
    console.log(`You have successfully turned on your ${this.model}`);
  },

  shutDown : function () {
    console.log(`You have successfully shut down on your ${this.model}`);
  }
}

phone1.turnOn();

*/