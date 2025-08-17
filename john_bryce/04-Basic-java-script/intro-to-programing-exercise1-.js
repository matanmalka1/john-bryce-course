//this is a single-line comment
alert("Hello , my name is Matan Malka");
document.getElementById("output").innerHTML += "First Typescript page";
document.getElementById("output").innerHTML += "<br>";
document.getElementById("output").innerHTML += "Second Typescript page";
document.getElementById("output").innerHTML += "<br>";

let fName = prompt("Please enter your first name:");
let lName = prompt("Please enter your last name:");
document.getElementById(
  "output"
).innerHTML += `your full name is ${fName} ${lName} <br>`;

let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
document.getElementById(
  "output"
).innerHTML += `Your last name is ${lastName} and your first name ${firstName} "<br>"`;

let value1 = prompt("Enter first value:");
let value2 = prompt("Enter second value:");
document.getElementById(
  "output"
).innerHTML += `The first value you entered is: ${value1} <br`;

let city = prompt(`enter your city:`);
document.getElementById("output").innerHTML += `Your city is ${city} <br> `;

let gFriend = prompt(`Enter your girlfriend name:`);
document.getElementById(
  "output"
).innerHTML += `Your girlfriend is ${gFriend} <br>`;
document.getElementById(
  "output"
).innerHTML += `Your girlfriend is ${gFriend} <br>`;
document.getElementById(
  "output"
).innerHTML += `Your girlfriend is ${gFriend} <br>`;

//let bFriend = prompt(`Enter your boyfriend name:`);
document.getElementById(
  "output"
).innerHTML += `your boyfriend is ${bFriend} again ${bFriend} and again ${bFriend} <br>`;

let data = prompt("Enter first value:");
data = prompt("Enter second value:");
document.getElementById(
  "output"
).innerHTML += `The content of data is: ${data} <br>`;
//הערך הראשון נדרס ע״י הערך השני

let firstName2 = prompt("Enter your first name:");
let lastNam2 = prompt("Enter your last name:");
document.getElementById("output").innerHTML += firstName2 + "<br>" + lastName2;
