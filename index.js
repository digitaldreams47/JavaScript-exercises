// Variables

// let studentAge = 21; // number
// let firstName = "Hila Serban"; // numbers
// let student = false; // boolean

// studentAge += 1;


// console.log("Hello " + firstName);
// console.log("You are: " + studentAge + " years old");
// console.log("Enrolled: " + student);

// document.getElementById("p1").innerHTML = "Hello, " + firstName;
// document.getElementById("p2").innerHTML = "You are, " + studentAge + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Arithmetic expressions

// let students = 20;

// // students += 1;
// // students -= 1;
// // students *= 1;
// // students /= 1;
// let extraStudents;
// extraStudents = students % 3;

// console.log("students: " + students);
// console.log("extraStudents: " + extraStudents);


// let result = 1 + 2 * (3 + 4);
// console.log("result: " + result);

// Accept user input

// let userName = window.prompt("What`s your name?");
// console.log("userName: " + userName);
let userName;

document.getElementById("myButton").onclick = function(){
  userName = document.getElementById("textName").value;
  console.log("userName: " + userName);
  document.getElementById("myLabel").innerHTML = "Hello " + userName + ":";
}


document.getElementById("textName").value = "Serban";