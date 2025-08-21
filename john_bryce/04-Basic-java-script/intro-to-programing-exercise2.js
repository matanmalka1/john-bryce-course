//exercise 1
let number1 = parseInt(prompt(`Enter first number:`));
let number2 = parseInt(prompt(`Enter second number:`));
let number3 = parseInt(prompt(`Enter third number:`));
document.getElementById(
  "output"
).innerHTML += `Exercise 1:\nnum1: ${number1}\n num2: ${number2}\n num3: ${number3}\n Sum: ${
  number1 + number2 + number3
} \n \n`;

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

let out = document.getElementById("output");
out.innerHTML += `num1: ${num1}<br>`;
out.innerHTML += `num2: ${num2}<br>`;
out.innerHTML += `num3: ${num3}<br>`;
out.innerHTML += `average: ${(num1 + num2 + num3) / 3}`; //exercise 2
out.innerHTML += `multiplication: ${num1 * num2 * num3}`; //exercise 3

let firstNumber = Number(prompt(`enter a number`));
document.getElementById("output").innerHTML += ` The square is: ${
  firstNumber * firstNumber
}`; //exercise 4

let nums1 = Number(prompt("Enter the first number:"));
let nums2 = Number(prompt("Enter the second number:"));
let nums3 = Number(prompt("Enter the third number:"));
let nums4 = Number(prompt("Enter the fourth number:"));
let out1 = document.getElementById("output");
out1.innerHTML += `addition of nums1 and nums3 is: ${nums1 + nums3}<br>`; //exercise 5
out1.innerHTML += `subtraction of nums2 and nums4 is: ${nums2 - nums4}<br>`;
out1.innerHTML += `division of nums3 in 8 is: ${nums3 / 8}<br>`;
out1.innerHTML += `multiplaction of nums4 in nums1 is: ${nums4 * nums1}<br>`;

// Exercise 5
let numbs1 = Number(prompt("Enter the first number:"));
let numbs2 = Number(prompt("Enter the second number:"));
let numbs3 = Number(prompt("Enter the third number:"));
let numbs4 = Number(prompt("Enter the fourth number:"));
document.getElementById(
  "output"
).innerHTML += `addition of nums1 and nums3 is: ${numbs1 + numbs3}<br>`;
document.getElementById(
  "output"
).innerHTML += `subtraction of nums2 and nums4 is: ${numbs2 - numbs4}<br>`;
document.getElementById("output").innerHTML += `division of nums3 in 8 is: ${
  nums3 / 8
}<br>`;
document.getElementById(
  "output"
).innerHTML += `multiplaction of nums4 in nums1 is: ${numbs4 * numbs1}<br>`;

// Exercise 6
let A1 = Number(prompt("Enter value for A:"));
let B2 = Number(prompt("Enter value for B:"));
let temp2 = A;
A = B;
B = temp2;
document.getElementById(
  "output"
).innerHTML += `After swap:<br>A = ${A}, B = ${B}<br>`;

// Exercise 7
let A = Number(prompt("Enter value for A:"));
let B = Number(prompt("Enter value for B:"));
let temp = A;
A = B;
B = temp;
document.getElementById(
  "output"
).innerHTML += `Exercise 7:\nAfter swap:\nA = ${A}, B = ${B}\n\n`;

// Exercise 8
let length = Number(prompt("Enter room length:"));
let width = Number(prompt("Enter room width:"));
let area = length * width;
let perimeter = 2 * (length + width);
document.getElementById(
  "output"
).innerHTML += `Exercise 8:\nRoom area: ${area}\nRoom perimeter: ${perimeter}\n\n`;

// Exercise 9
let diameter = Number(prompt("Enter pot diameter:"));
let depth = Number(prompt("Enter pot depth:"));
let radius = diameter / 2;
let potArea = 3.14 * radius * radius;
let volume = potArea * depth;
document.getElementById(
  "output"
).innerHTML += `Exercise 9:\nPot volume: ${volume.toFixed(2)}\n\n`;

// Exercise 10
let totalMinutes = Number(prompt("Enter movie length (minutes):"));
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
document.getElementById(
  "output"
).innerHTML += `${hours} hour(s) and ${minutes} minute(s)<br>`;

// Exercise 11
let number11 = Number(prompt("Enter a number with at least 4 digits:"));
let lastDigit = numbers % 10;
document.getElementById("output").innerHTML += `Last digit: ${lastDigit}<br>`;

// Exercise 12
let number = Number(prompt("Enter a number with at least 4 digits:"));
let secondFromRight = Math.floor(number / 10) % 10;
document.getElementById(
  "output"
).innerHTML += `Second digit from right: ${secondFromRight}<br>`;

// Exercise 13
let num = Number(prompt("Enter a number (non-zero):"));
if (num > 0) {
  document.getElementById("output").innerHTML += `The number is positive<br>`;
} else {
  document.getElementById("output").innerHTML += `The number is negative<br>`;
}
let height = prompt("Enter your room height")
let lenght