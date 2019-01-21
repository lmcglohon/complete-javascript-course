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


/*****************************
* Functions
*/


/*********************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName){}

// Function expression
// var whatDoYouDo = function(job, firstName){
//   switch(job){
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives an Uber';
//     case 'designer':
//       return firstName + ' designs websites';
//     default:
//       return firstName + ' does something else';
//   }
// }
//
// console.log(whatDoYouDo('driver', 'John'));

/******************************
* Objects and Properties
*/

// Object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // New object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/******************************
* Objects and methods
*/

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function(){
//     this.age = 2018 - this.birthYear;
//   }
// };
//
// john.calcAge()
// console.log(john);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared
their BMIs. Let's now implement the same functionality with objects
and methods.
1. For each of them, create an object with properties for their full
name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI
to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with
the full name and the respective BMI. Don't forget they might have the
same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg
and height in meter).

GOOD LUCK 😀
*/

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
// var mark = {
//   firstName: 'Mark',
//   lastName: 'Jones',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark.firstName + ' ' + mark.lastName + ' has the bigger BMI of ' + mark.bmi);
// } else if (john.bmi > mark.bmi) {
//   console.log(john.firstName + ' ' + john.lastName + ' has the bigger BMI of ' + john.bmi);
// } else {
//   console.log(john.firstName + ' ' + john.lastName + ' has the same BMI of ' + john.bmi + ' as ' + mark.firstName + ' ' + mark.lastName);
// }

/*******************************
* Loops and iteration
*/

// For Loop
/*for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}*/

// Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Reverse order
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
