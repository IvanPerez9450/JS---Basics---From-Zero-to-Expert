
///////////////////////////////////////// * JS FUNDAMENTALS 1 * ///////////////////////////////////////////////////

* Basics
* let & const
* Basics Operators (const, let, concatenations)
* Coding Challenge 1
* Strings, Template Literals, Multipline 
* if & else Statements
* Coding Challenge 2
* Conversion and Coercion
* Equality Operators == vs ===
* Coding Challenge 3
* The switch Statement
* Statement and Expressions
* Conditional (Ternary) Operator
* Coding Challenge 4

///////////////////////////////////////////////// * Basics * /////////////////////////////////////////////////////

console.log("Ivan");
console.log(23);

let firstName = "Ivan";
console.log(firstName);

let country = "Cuba";
let continent = "Americas";
let population = "601 million";

console.log(country);
console.log(continent);
console.log(population);

true;
console.log(true)

let ImRockingJS = true;            // boolean
console.log(ImRockingJS);

console.log(typeof true);
console.log(typeof 33);
console.log(typeof "Ivan");

///////////////////////////////////////////////////////////////////////////// * let & const

let age = 38;
age = 40;
console.log(age);

const birthYears = 1991;
console.log(birthYears);

////////////////////////////////////////////////////////////////////////// * Basics Operators

const now = 2030;
const ageIvan = now - 1988;
const ageRocky = now - 2017;

console.log(ageIvan, ageRocky);
console.log(ageIvan * 2, ageIvan / 2, 2 ** 3);

const firstName = 'Ivan';
const lastName = 'Perez';
console.log(firstName + ' ' + lastName);         //concatenations

let x = 10 + 5;
x += 10;
x ++;
x --;
console.log(x);

console.log(ageIvan < ageRocky)
console.log(ageRocky >= 10);

const now = 2030;
const ageIvan = now - 1988;
const ageRocky = now - 2017;

console.log(now - 1988 > now - 2017);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const aveAge = (ageIvan + ageRocky) / 2
console.log(aveAge);

/////////////////////////////////////////////////////////////////// * Coding Challenge 1

const markWeight = 78;     
const markHeigth = 1.69;
const johnWeight = 92; 
const johnHeigth = 1.95;

const markBmi = markWeight / (markHeigth ** 2); 
const johnBmi = johnWeight / (johnHeigth ** 2); 

console.log(markBmi, johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)


const markWeight2 = 95;     
const markHeigth2 = 1.88;
const johnWeight2 = 85; 
const johnHeigth2 = 1.76;

const markBmi2 = markWeight2 / (markHeigth2 ** 2); 
const johnBmi2 = johnWeight2 / (johnHeigth2 ** 2); 

console.log(markBmi2, johnBmi2);

const markHigherBMI2 = markBmi2 > johnBmi2;
console.log(markHigherBMI2)

//////////////////////////////////////////////////////////// * Strings, Template Literals, Multipline 

const firstName = 'Ivan';
const job = 'coder';
const birthYears = '1988';
const year = 2030;

console.log( "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYears)+ ' ' + 'years old'+ ' ' + job + '!');

const ivanNew = `I'm ${firstName}, a ${year - birthYears} year old ${job} !`;

console.log(ivanNew)

console.log(`String
multiple
lines`);

////////////////////////////////////////////////////////////////////////// * if & else

const age = 15;

if (age >= 18) {
    console.log('Sarah can take the test');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to drive, wait ${yearsLeft} more years`);
}

const birthYears = 2012;
let century;

if (birthYears <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)

////////////////////////////////////////////////////////////// * Coding Challenge 2

const markWeight = 78;     
const markHeigth = 1.69;
const johnWeight = 92; 
const johnHeigth = 1.95;

const markBmi = markWeight / (markHeigth ** 2); 
const johnBmi = johnWeight / (johnHeigth ** 2); 

console.log(`Mark's BMI ${markBmi}`);
console.log(`John's BMI ${johnBmi}`);


const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)

if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is higher that John's ${johnBmi}`)
}  else {
    console.log(`Mark's BMI ${johnBmi} is higher that John's ${markBmi}`)
}

//////////////////////////////////////////////////////////////////// * Conversion and Coercion

const inputYear = '1991';                   

console.log( '1991' + 18);                  // String
console.log(Number(inputYear) + 18 );       // converting to Number
console.log(String(23), 23);                // Converting to String

/////////////////////////////// * Truthy and Falsy Values
5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Ivan'));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

//////////////////////////////////////////////////////////////////// * Equality Operators == vs ===

const age = 18;
if (age === 18) console.log(`you just became and adult`);

//////////////////////////////////////////// * Boolen Logic and Logocal Operators (and && , or ||, not !)

const hasDriverLicense = true;  // A
const hasGoodVison = false;      // B

console.log(hasDriverLicense && hasGoodVison);     // && and
console.log(hasDriverLicense || hasGoodVison);     // || or
console.log(!hasDriverLicense);                    // ! not

if (hasDriverLicense && hasGoodVison) {
    console.log(`Sarah is able to drive`);
} else {
    console.log (`Someone else should drive`);
}

const hasDriverLicense = true;    // A
const hasGoodVison = true;        // B
const isTired = false;            // C
console.log(hasDriverLicense || hasGoodVison || isTired);
console.log(hasDriverLicense && hasGoodVison || isTired);


if (hasDriverLicense && hasGoodVison && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log (`Someone else should drive`);
}

////////////////////////////////////////////////////////////// * Coding Challenge 3

const fistGameDolphins = (96 + 108 + 89) / 3;
const fistGameKoalas = (88 + 91 + 110) / 3;

const secondGameDolphins = (97 + 112 + 101) / 3;
const secondGameKoalas = (109 + 95 + 123) / 3;

const thirdGameDolphins = (97 + 112 + 101) / 3;
const thirdGameKoalas = (109 + 95 + 106) / 3;

const aveScoreDolphins = (fistGameDolphins + secondGameDolphins + thirdGameDolphins) / 3;
const aveScoreKoalas = (fistGameKoalas + secondGameKoalas + thirdGameKoalas) / 3;

console.log(`aveScoreDolphins ${aveScoreDolphins}`);
console.log(`aveScoreKoalas ${aveScoreKoalas}`);

if (aveScoreKoalas && aveScoreDolphins < 100) {
    console.log(`Scrore under 100, The is not winner`)
} else if (aveScoreKoalas > aveScoreDolphins) {
    console.log(`Koalas team is the winner`)
} else if (aveScoreKoalas === aveScoreDolphins) {
    console.log(`The was not winner, game is a draw`)
} else {
    console.log(`Dolphins team is the winner`)
}

////////////////////////////////////////////////////////////// * The switch Statement

const day = 'monday';

switch(day) {
    case 'monday':
        console.log(`Plan course Structure`);
        console.log(`Go coding Meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare Theory Videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write Code examples`);
        break;
    case 'friday':
        console.log(`Record Videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log (`Enjoy weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

// (and && , or ||, not !)



if (day === 'monday') {
    console.log('Plan course Structure');
    console.log('Go coding Meetup');
} else if (day === 'tuesday') {
    console.log('Prepare Theory Videos');
} else if ( day === 'wednesday' || day === 'thursday') {
    console.log('Write Code examples');
} else if ( day === 'friday') {
    console.log('Record Videos');
} else if ( day === 'saturday' || day === 'sunday') {
    console.log ('Enjoy weekend')
} else {
    console.log('Not a valid day')
}

////////////////////////////////////////////////////////////// * Statement and Expressions

// Expressions
3 * 4
1991
true && false && false

// Statement
if (23 > 10) {
    const str = '23 is bigger';
}

////////////////////////////////////////////////////////////////// * Conditional (Ternary) Operator

age >= 18 ? console.log ('I like to drink wine'):   //age >= 18(greater or equal 18) ? if the condition is true, execute the code ('I like to drink wine')
console.log ('I like to drink water');

const age = 10;
const drink = age >= 18 ? 'wine' : 'water';

console.log(drink);
console.log(`I like to drink ${drink}`);

////////////////////////////////////////////////////////////// * Coding Challenge 4

SOLUTION 1
const tip = 40;

const largerBill = 430;           
const largerBillTip = 430 * (20/100);
const largerBillTotal = largerBill + largerBillTip;
const middleBill = 275;           
const middleBillTip = 275 * (15/100);  
const middleBillTotal = middleBill + middleBillTip;          
const smallerBill = 40;            
const smallerBillTip = 40 * (20/100);
const smallerBillTotal = smallerBill + smallerBillTip; 

tip === 40 ? console.log (`The bill was ${smallerBill}, the tip was ${smallerBillTip}, and the total value ${smallerBillTotal}`):
tip === 275 ? console.log (`The bill was ${middleBill}, the tip was ${middleBillTip}, and the total value ${middleBillTotal}`):
tip === 430 ? console.log (`The bill was ${largerBill}, the tip was ${largerBillTip}, and the total value ${largerBillTotal}`):
console.log ('I like to drink water');


SOLUTION 2
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);









///////////////////////////////////// * JS FUNDAMENTALS 2 * ///////////////////////////////////////////

// * Activating Strict Mode
// * Functions
// * Functions Declarations vs Expressions
// * Arrow Functions 
// * Intro to Arrays 
// * Basics Operation with Arrays 
// * Coding Challenge 2
// * Introduction to Objects
// * Object Method
// * The for Loop
// * Looping Arrays, Breaking and Continuity
// * Looping backwards and loops in loops
// * The While Loop

///////////////////////////////////////// * Activating Strict Mode * //////////////////////////////////
'use strict';

///////////////////////////////////////// * Functions

// function logger() {
//     console.log('My name is Ivan');
// }

// logger();                           //calling, running, or invoking the function
// logger();                           
// logger();                           

// // EXAMPLE 1
// function fruitProcessor(apples, oranges) {
//     const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor (5, 0);
// console.log(appleJuice);


// // EXAMPLE 2
// function programmingLanguages( html, css, js) {
//     const boothCamp = `It takes ${html} months of html, ${css} of css, and ${js} of js to become a frontend developer.`;
//     return boothCamp;
// }

// const months = programmingLanguages(1, 1, 2);
// console.log(months);

// // EXAMPLE 3
// function days( monday, tuesday, wednesday) {
//     const toDos = `Monday ${monday}, Tuesday ${tuesday}, Wednesday ${wednesday}`;
//     return toDos
// }
// const tasks = days ('Take out the trash', 'Study code', 'school work');
// console.log(tasks);

///////////////////////////////////////// * Functions Declarations vs Expressions

// //Function Declaration
// function calcAge1 (birthYear) {          
//     return 2037 - birthYear;
// }

// const age1 = calcAge1 (1991);
// console.log (age1);

// // Function Expression
// const calAge2 = function (birthYear) {    
//     return 2037 - birthYear;
// }

// const age2 = calAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////// * Arrow Functions 

// const Age2 = function (birthYear) {    
//     return 2037 - birthYear;
// }

//Arrow Functions
// const Age3 = birthYear => 2037 - birthYear;
// const age3 = Age3(1988);

// console.log(age3);


// const yearsUntilRetirement = actualAge => 65 - actualAge;
// const age = yearsUntilRetirement(55);

// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1988, 'Ivan'));


// const costOfFruit = (initialNumber, fruitName) => {
//     const numberOfFruitsConsumed = initialNumber - 3;
//     const priceOfFruit = numberOfFruitsConsumed * 3;
//     return `The price for all ${fruitName} is a total of ${priceOfFruit}`;
// }

// console.log(costOfFruit(10,'Mangos'))


///////////////////////////////////////// * Functions calling other Functions *

// EXAMPLE 3
// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangesPieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2,3));

///////////////////////////////////////// * Intro to Arrays *

// const friends = ['Michael','Steven','Peter'];
// console.log(friends);

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Diana';
// console.log(friends);

// const firstName = 'Ivan';
// const friendName = ['Mario', 'Arnaldo', ' Dennis'];
// const infoIvan = [firstName, 'Perez', 2021 - 1988, 'student', friendName];

// console.log(infoIvan);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }
// const years = [1990, 1998, 1995, 2006];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1,age2,age3);

// const arrayAges = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(arrayAges);

///////////////////////////////////////// * Basics Operation with Arrays *

// const friends = ['Michael','Steven','Peter'];   

// friends.push('Jay');                            // push - Adds elements at the end 
// console.log(friends);

// friends.unshift('Maria');                       // unshift - Adds elements at the Begining
// console.log(friends);

// friends.pop();                                  // pop - Remove the last elements 
// friends.pop();                                 
// console.log(friends);

// friends.shift();                                // pop - Remove the first elements 
// console.log(friends);

// console.log(friends.indexOf('Michael'));

// console.log(friends.includes('Michael'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Michael')) {
//     console.log('You have a friend called Michael');
// }

///////////////////////////////////////// * Introduction to Objects * DOT vs Bracket Notation

// const ivan = {                                   //object literal 
//     firstName: 'Ivan',
//     lastName: 'Perez',
//     age: 2021 - 1988,
//     job: 'teacher',
//     friends: ['Michael','Steven','Peter'] 
// };
// console.log(ivan);
// console.log(ivan.lastName)
// console.log(ivan['lastName']);

// const nameKey = 'Name';
// console.log(ivan['first' + nameKey]);
// console.log(ivan['last' + nameKey]);

// ivan.location = 'US';                           // Add info to an object
// ivan['email'] = 'carlos@gmail.com';
// console.log(ivan);

///////////////////////////////////////// * Object Method

// const ivan = {                                   //object literal 
//     firstName: 'Ivan',
//     lastName: 'Perez',
//     birthYear: 1988,
//     job: 'teacher',
//     friends: ['Michael','Steven','Peter'],
//     hasDriverLicence: true, 
// //     calcAge: function (birthYear) {
// //         return 2021 - birthYear;
// //     }
// // };
// // calcAge: function () {
// //     return 2021 - this.birthYear;
// // }
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     }
// };
// console.log(ivan.calcAge());

// console.log(ivan.age);
// console.log(ivan.age);
// console.log(ivan.age);

///////////////////////////////////////// * The for Loop

// for( let rep = 1; rep <= 10; rep ++){
//     console.log(`Lifting weights repwtition ${rep}`);
// }

///////////////////////////////////////// * Looping Arrays, Breaking and Continuity

// const jonasArray = [
//     'Jonas', 
//     'Schmedtmsn',
//     2031 - 1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];
// for (let i = 0; i < jonasArray.length; i ++) {
//     console.log(jonasArray[i]);
// }


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i ++ ) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// const jonasArray = [
//     'Jonas', 
//     'Schmedtmsn',
//     2031 - 1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];

//continue statement - access the loop and continue to the next one

// console.log('---ONLY STRINGS---');

// for (let i = 0; i < jonasArray.length; i ++) {
//     if (typeof jonasArray[i] !=='string') continue;

//     console.log(jonasArray[i]);
// }

// // break statement - terminate the loop

// console.log('---BREAK WITH NUMBER---');

// for (let i = 0; i < jonasArray.length; i ++) {
//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i]);
// }


///////////////////////////////////////// * Looping backwards and loops in loops

// const jonasArray = [
//     'Jonas', 
//     'Schmedtmsn',
//     2031 - 1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];
// for (let i = jonasArray.length -1; i > 0; i --) {
//     console.log(jonasArray[i]);
// }



// for (let exercise = 1; exercise < 4; exercise ++) {
//     console.log(`---Starting Exercise ${exercise}` );

//     for (let rep = 1; rep < 6; rep++) {
//         console.log (`exercise ${exercise}; Lifting weight repetition ${rep}`);
//     }
// }

///////////////////////////////////////// * The While Loop

// for (let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !==6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice ===6) console.log('Loop is about to end...')
// }
