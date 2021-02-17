
////////////////////////////// * Basics

// console.log("Ivan");
// console.log(23);

// let firstName = "Ivan";
// console.log(firstName);

// let country = "Cuba";
// let continent = "Americas";
// let population = "601 million";

// console.log(country);
// console.log(continent);
// console.log(population);

// true;
// console.log(true)

// let ImRockingJS = true;            // boolean
// console.log(ImRockingJS);

// console.log(typeof true);
// console.log(typeof 33);
// console.log(typeof "Ivan");

////////////////////////////////// * let & const

// let age = 38;
// age = 40;
// console.log(age);

// const birthYears = 1991;
// console.log(birthYears);

////////////////////////////////// * Basics Operators

// const now = 2030;
// const ageIvan = now - 1988;
// const ageRocky = now - 2017;

// console.log(ageIvan, ageRocky);
// console.log(ageIvan * 2, ageIvan / 2, 2 ** 3);

// const firstName = 'Ivan';
// const lastName = 'Perez';
// console.log(firstName + ' ' + lastName);         //concatenations

// let x = 10 + 5;
// x += 10;
// x ++;
// x --;
// console.log(x);

// console.log(ageIvan < ageRocky)
// console.log(ageRocky >= 10);

// const now = 2030;
// const ageIvan = now - 1988;
// const ageRocky = now - 2017;

// console.log(now - 1988 > now - 2017);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const aveAge = (ageIvan + ageRocky) / 2
// console.log(aveAge);

//////////////////////////////////// * Coding Challenge 1

// const markWeight = 78;     
// const markHeigth = 1.69;
// const johnWeight = 92; 
// const johnHeigth = 1.95;

// const markBmi = markWeight / (markHeigth ** 2); 
// const johnBmi = johnWeight / (johnHeigth ** 2); 

// console.log(markBmi, johnBmi);

// const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI)


// const markWeight2 = 95;     
// const markHeigth2 = 1.88;
// const johnWeight2 = 85; 
// const johnHeigth2 = 1.76;

// const markBmi2 = markWeight2 / (markHeigth2 ** 2); 
// const johnBmi2 = johnWeight2 / (johnHeigth2 ** 2); 

// console.log(markBmi2, johnBmi2);

// const markHigherBMI2 = markBmi2 > johnBmi2;
// console.log(markHigherBMI2)

/////////////////////////////////// * Strings, Template Literals, Multipline 

// const firstName = 'Ivan';
// const job = 'coder';
// const birthYears = '1988';
// const year = 2030;

// console.log( "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYears)+ ' ' + 'years old'+ ' ' + job + '!');

// const ivanNew = `I'm ${firstName}, a ${year - birthYears} year old ${job} !`;

// console.log(ivanNew)

// console.log(`String
// multiple
// lines`);

///////////////////////////////// * if & else

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can take the test');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young to drive, wait ${yearsLeft} more years`);
// }

// const birthYears = 2012;
// let century;

// if (birthYears <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

///////////////////////////////// * Coding Challenge 2

// const markWeight = 78;     
// const markHeigth = 1.69;
// const johnWeight = 92; 
// const johnHeigth = 1.95;

// const markBmi = markWeight / (markHeigth ** 2); 
// const johnBmi = johnWeight / (johnHeigth ** 2); 

// console.log(`Mark's BMI ${markBmi}`);
// console.log(`John's BMI ${johnBmi}`);


// const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI)

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI ${markBmi} is higher that John's ${johnBmi}`)
// }  else {
//     console.log(`Mark's BMI ${johnBmi} is higher that John's ${markBmi}`)
// }

///////////////////////////////// * Conversion and Coercion

// const inputYear = '1991';                   

// console.log( '1991' + 18);                  // String
// console.log(Number(inputYear) + 18 );       // converting to Number
// console.log(String(23), 23);                // Converting to String

///////////////////////////////// * Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
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

///////////////////////////////// * Equality Operators == vs ===
