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
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

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
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

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
  //   return 2024 - birthyear;
  // },

  calcAge: function(){
    this.age = 2024 - this.birthyear;
    return this.age;
  },

  calcBirthyeah: function(){
    console.log(this);
    return 2025 - this.birthyear;
    
  },

  sumMary: function(){
    return `${dhananjay['firstName']} is a ${dhananjay['calcAge']()} year old ${dhananjay['Job']} he has ${dhananjay.hasDriversLicense ? "a" : "no he has"} drivers license`;
  }

}

console.log(dhananjay['calcAge']());

// console.log(dhananjay.calcBirthyeah());

console.log(dhananjay.age);
console.log(dhananjay.age);
console.log(dhananjay.age);

console.log(dhananjay);
console.log(dhananjay.sumMary());

*/

// Coding Challenges Part Three Object-------------------------------------------------------------------------

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const markDetails = {
  firstName: "Mark",
  lastName: "Miller",
  markHeight: 1.69,
  markWeight: 78,
  calcBMIMark: function(){
   this.markBMI = this.markWeight / this.markHeight ** 2;
   return this.markBMI;
  }
}

const johnDetails = {
  firstName: "John",
  lastName: "Smit",
  johnHeight: 1.95,
  johnWeight: 92,
  calcBMIJohn: function(){
    this.johnBMI = this.johnWeight / (this.johnHeight * this.johnHeight);
   return this.johnBMI;
  }
}

console.log(markDetails.calcBMIMark(), johnDetails.calcBMIJohn());

const result = markDetails.markBMI >= johnDetails.johnBMI ? `${markDetails['firstName']} ${markDetails['lastName']}'s BMI ${markDetails['markBMI']} is higher than ${johnDetails['firstName']} ${johnDetails['lastName']}'s ${johnDetails['johnBMI']}!` : `${johnDetails.firstName} ${johnDetails.lastName}'s BMI ${johnDetails.johnBMI} is higher than ${markDetails.firstName} ${markDetails.lastName}'s ${markDetails.markBMI}!`;

console.log(result);

console.log(johnDetails.johnBMI);
*/



// Iteration: For Loop ---------------------------------------------------------------------------------------

/*
console.log(`Dhananjay Bhatkars push ups rep:- 10`);
console.log(`Dhananjay Bhatkars push ups rep:- 9`);
console.log(`Dhananjay Bhatkars push ups rep:- 8`);
console.log(`Dhananjay Bhatkars push ups rep:- 7`);
console.log(`Dhananjay Bhatkars push ups rep:- 6`);
console.log(`Dhananjay Bhatkars push ups rep:- 5`);
console.log(`Dhananjay Bhatkars push ups rep:- 4`);
console.log(`Dhananjay Bhatkars push ups rep:- 3`);
console.log(`Dhananjay Bhatkars push ups rep:- 2`);
console.log(`Dhananjay Bhatkars push ups rep:- 1`);


for(let rep = 10; rep >= 1;  rep--){
  console.log(`Dhananjay Bhatkars push ups rep:- ${rep}`);
}

*/


// Looping Array, Breaking and Continuing --------------------------------------------------------------------

/*
// Looping Array
const Me = [
  "Dhananjay",
  "Bhatkar",
  2024-1996,
  ["Mamta", "Sahil", "Pooja"],
  45872
];

const replicant = [];

for(let d = 0; d < Me.length; d++){
  console.log(Me[d],  typeof Me[d]);

  // replicant[d] = Me[d];
  replicant.push(Me[d]);
}

console.log(replicant);


const year = [1994, 1992, 1982, 1990];

const age = [];

for(let i = 0; i < year.length; i++){
    age.push(2024 - year[i]);
}
console.log(age);


// Breaking And Continuing

console.log("----String-----");

for(let x = 0; x < Me.length; x++){
  if(typeof Me[x] === 'string'){
    console.log(Me[x]);
  }
}

console.log("-----Number-----");

for(let x = 0; x < Me.length; x++){
  if(typeof Me[x] === 'number'){
    console.log(Me[x]);
  }
}

*/


// Looping Backwards and Loops in Loops ----------------------------------------------------------------------

/*
const user = [
  "Dhananjay",
  "Bhatkar",
  2024-1996,
  ["Mamta", "Sahil", "Pooja"],
  45872
];

for(let i = user.length - 1; i >= 0; i--){
  console.log(user[i]);
}

for(let workout = 1; workout <= 6; workout++){
  console.log("the exercise starts" + workout);

  for(let rep = 1; rep <= 8; rep++){
    console.log("the exercise start" + workout + "the reps is" + rep);
  }
}
*/


// Codding Challenge Part Four For Loop ----------------------------------------------------------------------

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// My Point Of View Answer Sum Calculation Answer***********************************************************
// const calcAverage = (arrs) => arrs / 10;

// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const total = [];

// for(let sum = 0; sum < arr.length; sum++){
//   const totals = calcAverage(arr[sum]);
//   total.push(totals);
// }

// console.log(total);


// exact answer calculation of sum ***************************************************
// const calcAverage = (arr) =>{
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++){
//      sum = sum +arr[i];
//   }

//   return sum / arr.length;
// }

// console.log(calcAverage([5, 6, 10]));


// bill calculation using for loop*********************************************************
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tip = [];

// const total = [];

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for(let i = 0; i < bills.length; i++){
//   tip.push(calcTip(bills[i]));
//   total.push(calcTip(bills[i]) + bills[i]);
// }
// console.log("Bills:- " + bills);
// console.log("Tips:- " + tip);
// console.log("Totals:- " + total);


