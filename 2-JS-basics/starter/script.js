// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'teacher';
// console.log(job);

/*********************
* Variable mutation and type coercion
*/

// Type coercion

// var firstName = 'John';
// var age = 28;
//
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // Variable mutation
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/****************************************
* Basic operators
*/

// Logical operators
// var ageJohn = 28;
// var ageMark = 33;
//
// var johnOlder = ageJohn < ageMark;
//
// console.log(johnOlder);
//
// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/********************
* Operator Precedence
*/


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether
Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

// var massMark = 78; // kg
// var heightMark = 1.69; // meters
//
// var massJohn = 92;
// var heightJohn = 1.95;
//
// var markBMI, johnBMI;
// markBMI = massMark / (heightMark * heightMark);
// johnBMI = massJohn / (heightJohn * heightJohn);
//
// var markHigherBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
// console.log(markBMI, johnBMI);

/******************************
* If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is not married!');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is not married!');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 150;
var heightJohn = 1.95;

var markBMI, johnBMI;
markBMI = massMark / (heightMark * heightMark);
johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s.')
} else {
  console.log('John\'s BMI is higher than Mark\'s.')
}
