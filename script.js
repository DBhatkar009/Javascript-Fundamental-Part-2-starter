//Activating Strict mode--------------------------------------------------------------------------------------------------------------
/*
'use strict';

let hasDriversLicense = false;

const passtest = true;

if(passtest) hasDriversLicense = true

if(hasDriversLicense) console.log("I Can Drive 🚗");


const interface = true;

const private = false;
*/


//Functions----------------------------------------------------------------------------------------------------------------------------
/*
function call(){
  console.log("Javascript fundamental");
}

call();
call();
call();

function fruitJuicer(mango, apple){
  console.log(mango, apple);
  const juice = `I want ${mango} Mango Juice and ${apple} Apple Juice`;
  console.log(juice);
}

fruitJuicer(4, 5);

fruitJuicer(2, 2);

const num = Number('2');
*/


//Functions Declarations and Functions Expressions--------------------------------------------------------------------------------------
/*
// this method call function declarations
function agecalculator(birthyear){
  return 2024 - birthyear;
}

const age1 = agecalculator(1996);
console.log(age1);


// this method call function expressions
const agecalc = function(Birthyear){
  let age = 2025 - Birthyear;
  console.log(age);
}
agecalc(1996);

*/


// Arrow Functions------------------------------------------------------------------------------------------------------------------------
/*
const agecalc = (Birthyear, birth)=>{
  let age = 2025 - Birthyear + birth;
  console.log(age);
}
agecalc(1996, 29);


const jobRetirement = (birthyear, Name) => {
  let age = 2024 - birthyear;
  let retirement = 64 - age;
  return `Hii this is me ${Name} and my age is ${age} and my retirement year is left is ${retirement} year
  thank you`;
}

const jobDescription = jobRetirement(1996, 'Dhananjay');
console.log(jobDescription);

*/



// Function calling Other Function----------------------------------------------------------------------------

/*

const jucieProcess = function(fruit){
  return fruit * 4;
}

function fruitJuicer(mango, apple){
 let mangoJuice = jucieProcess(mango);
 let appleJuice = jucieProcess(apple);
 const juice = `I want ${mangoJuice} Mango Juice and ${appleJuice} Apple Juice`;
 return juice;
}

console.log(fruitJuicer(2, 3));

*/



// Reviewing Functions-----------------------------------------------------------------------------------------

// using Arrow function
/*
const personAge = birthyear => {
  return 2024 - birthyear;
}

const jobRetirement = (birthyear, Name) => {
  let age = personAge(birthyear);
  let retirement = 64 - age;

  if(retirement > 0){
   console.log(`Hii this is me ${Name} and my age is ${age} and my retirement year is left is ${retirement} year thank you`);
   return retirement;
  } else {
    console.log(`the person has already retired ${-1} 🎉🎊`);
    return retirement;
  }

}

console.log(jobRetirement(1998, 'Aman'));
console.log(jobRetirement(1950, 'Dhananjay'));

*/


// Coding Challanges part One Functions------------------------------------------------------------------------

/*
const calcAverage = (a,b,c) =>{
  return (a + b + c) / 3;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
  if(avgDolphins >= 2 * avgKoalas){
      console.log(`Dolphine Win the Match🏆 ${avgDolphins}`);
  }
  else if(avgKoalas >= 2 * avgDolphins){
      console.log(`Koala Win the Match🏆 ${avgKoalas}`);
  }
  else{
      console.log(`No one Win the Match the Match is Drew`);
  }

}

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphins,scoreKoalas);

*/


// Introduction Array ----------------------------------------------------------------------------------------

/*
const friends = ["nill", "niteen", "mukesh", "Abhishek"];
console.log(friends);

console.log(friends.length);

friends[0] = "John";

console.log(friends);

const years = new Array(1995, 1996, 1991, 1999);

console.log(years);


const fname = "Dhananjay";
const personDetails = [fname, "Bhatkar", 2024 - years[1], friends];
console.log(personDetails);


function calcAge(birthyear){
  return 2037 - birthyear;
}
const year = [1995, 1996, 1991, 1999];

const age = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age, age2, age3);

let ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2]), calcAge(year[3])];
console.log(ages);
console.log(ages.length);

*/


// Basics Array Operations(Methods)----------------------------------------------------------------------------

/*

// Add values in Array

const friends = ["nill", "niteen", "mukesh", "Abhishek"];
let add = friends.push("johny");
console.log(add);
console.log(friends);

friends.unshift("siddhu");
console.log(friends);


// Remove Values in Array

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);



// Array indexOf

console.log(friends.indexOf("Abhishek"));


// Array Includes

console.log(friends.includes("Abhishek"));

console.log(friends.includes(25));

*/



// Coding Challenges Part Two Array----------------------------------------------------------------------------

/*
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log("Bills:- " + bill, " Tips:- " + tips, " Totals:- " +  total);

*/



// Object ----------------------------------------------------------------------------------------------------

/*
let year = 1996;

const whoAmI = {
  name: "Dhananjay",
  lastname: "Bhatkar",
  age: 2024 - year,
  fevouratePlace: ["dadar", "santacruz", "ratnagiri", "bhatye", "prabhadevi"]
}

console.log(whoAmI);
*/


// Dote vs Bracket Notation -----------------------------------------------------------------------------------

/*
let dhananjay = {
  firstName: "Dhananjay",
  lastName: "Bhatkar",
  phoneNo: 9867897784,
  friends: ["Rishab", "Rahul", "Somian", "Ashwini", "Iram", "Kulsum"],
  Job: "Full Stack Developer"
}

console.log(dhananjay);

// Dote notation
console.log(dhananjay.phoneNo);

// Bracket notation
console.log(dhananjay['firstName']);
console.log(dhananjay['friends']);


const nameKey = "Name"
console.log(dhananjay['first' + nameKey]);
console.log(dhananjay['last' + nameKey]);

const noKey = "No"
console.log(dhananjay['phone' + noKey]);


dhananjay.fevPlace = "Ratnagiri Bhatye";
dhananjay['birthday'] = "3rd june 1996";

console.log(dhananjay);

const ask = prompt("what do you want to know about Dhananjay, choose between this name, lastname, phoneNo, friends, job");

if(dhananjay[ask]){
  console.log(dhananjay[ask]);
}
else {
  console.log("you ask out of personal questions");
}


// challenges
// Dhananjay has a job and they refrence by 2 friends and these are rishab and rahul

console.log(`${dhananjay.firstName} has a ${dhananjay['Job']} job and they refrence by ${dhananjay['friends'].length-4} friends and these are ${dhananjay.friends[0]} and ${dhananjay.friends[1]}`);

*/


// Object Methods --------------------------------------------------------------------------------------------

/*

const dhananjay = {
  firstName: "Dhananjay",
  lastName: "Bhatkar",
  birthyear: 1996,
  phoneNo: 9867897784,
  friends: ["Rishab", "Rahul", "Somian", "Ashwini", "Iram", "Kulsum"],
  Job: "Full Stack Developer",
  hasDriversLicense: true,

  // calcAge: function(birthyear){
  //   return 2024 - this.birthyear;
  // }

  calcAge: function(){
    this.age = 2024 - this.birthyear;
    return this.age;
  },

  calcBirthyeah: function(){
    console.log(this);
    return 2025 - this.birthyear;
    
  },

  sumMary: function(){
    return `${dhananjay['firstName']} is a ${dhananjay.calcAge()} year old ${dhananjay['Job']} he has ${dhananjay.hasDriversLicense ? "a" : "no he has"} drivers license`;
  }

}

console.log(dhananjay.calcAge());

console.log(dhananjay.calcBirthyeah());

console.log(dhananjay.age);
console.log(dhananjay.age);
console.log(dhananjay.age);

console.log(dhananjay);
console.log(dhananjay.sumMary());

*/