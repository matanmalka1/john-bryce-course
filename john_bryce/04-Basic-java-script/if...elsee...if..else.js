let age = Number(prompt(`Enter a number:`));
if (age >= 21) {
  console.log(`You may enter the club`);
} else {
  console.log(`You are too young`);
}

let grade = Number(prompt(`Enter your grade:`));
if (grade >= 90) {
  console.log(`excellent`);
} else if (grade >= 75 && grade < 90) {
  console.log(`Very Good`);
} else if (grade >= 60 && grade < 75) {
  console.log(`Passed`);
} else {
  console.log(`Failed`);
}


let username = prompt(`Enter a username name:`)
let password = prompt(`Enter a password:`)

if (username === "admin" && password === "1234"){
    console.log(`Welcome, admin!`)
}
else if (username === "admin" && password !== "1234"){
    console.log(`Incorrect password`)
}
else if (username !== "admin" && password === "1234"){
    console.log(` unknown user`)
}
else{console.log(`access denied`)}