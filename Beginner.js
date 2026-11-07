//Question 1//

// console.log("" + 1 + 0)//10
// console.log("" - 1 + 0)//-1
// console.log(true + false)//1
// console.log(!true)//false
// console.log(6 / "3")//2
// console.log("2" * "3")//6
// console.log(4 + 5 + "px")//9px
// console.log("$" + 4 + 5)//$45
// console.log("4" - 2)//2
// console.log("4px" - 2)//NaN
// console.log(" -9 " + 5)//-9 5
// console.log(" -9 " - 5)//-14
// console.log(null + 1)//1
// console.log(undefined + 1)//Nan
// console.log(undefined == null)//true
// console.log(undefined === null)//false
// console.log(" \t \n" - 2)//-2

//Question 2//

// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four//34
// console.log(addition = three + four)
// let multiplication = three * four
// console.log(multiplication = three * four)
// let division = three / four//0.75
// console.log(division = three / four)
// let subtraction = three - four//0.75
// console.log(subtraction = three - four)
// let lessThan1 = three < four//true
// console.log(lessThan1 = three < four)
// let lessThan2 = thirty < four//true
// console.log(lessThan2 = thirty < four)

// let three = "3"
// let four = "4"
// let thirty = "30"
// Number("3")
// Number("4")
// Number("30")

// console.log(addition = Number(three) + Number(four));
// console.log(lessThan2 = Number(thirty) < Number(four));

//Question 3//

// if (0) console.log('#1 zero is true')// No value, will not print
// if ("0") console.log('#2 zero is true')//value exists, will print
// if (null) console.log('null is true')//No value, will not print
// if (-1) console.log('negative is true')//value exists, will print
// if (1) console.log('positive is true')//value exists, will print    

//Question 4//

// let a = 4, b = 6;

// let result = `${a} + ${b} is `;
// //Added in after the fact to account for value equaling 10
// if (a + b === 10) {
//     result += 'equal to 10';
// } else {
//     result += a + b < 10 ? 'less than 10' : 'greater than 10';
// }

// console.log(result);

//Question 5//

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

// // Function expression
// const getGreeting1 = function (name) {
//     return 'Hello ' + name + '!';
// };

// console.log(getGreeting1('Luis'));

// //Arrow Function
// const getGreeting2 = (name) => {
//     return 'Hello ' + name + '!';
// };

// console.log(getGreeting2('Luis'));


//Question 6
// Previous example: using "this"
// const person = {
//     firstName: "Inigo",
//     lastName: "Montoya",
//
//     introduce() {
//         return `My name is ${this.firstName} ${this.lastName}`;
//     }
// };
//
// console.log(person.introduce());


// Character objects
// const westley = {
//     name: 'Westley',
//     numFingers: 5
// };

// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// };


// // A. Add lastName and include it in greeting
// // B. Return a different catchphrase for six fingers
// // C. Convert getCatchPhrase to an arrow function
// //    and use a ternary operator

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',

//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;

//         console.log(greeting + this.getCatchPhrase(person));
//     },

//     getCatchPhrase: (person) => {
//         return person.numFingers === 6
//             ? 'You killed my father. Prepare to die.': 'Nice to meet you.';
//     }
// };


// // Test both characters
// inigo.greeting(westley);
// inigo.greeting(rugen);

//Question 7

// const basketballGame = {
//     score: 0,
//     fouls: 0,

//     freeThrow() {
//         this.score++;
//         return this;//This modification for each line answers part a.
//     },

//     basket() {
//         this.score += 2;
//         return this;
//     },

//     threePointer() {
//         this.score += 3;
//         return this;
//     },

//     foul() {
//         this.fouls++;
//         return this;
//     }, 

//     halfTime() {
//         console.log(`Halftime score is ${this.score} and fouls are currently at ${this.fouls}`);
//         return this;
//     },
//     //This addition gives us the full time score, part b. 
//     endOfRegulation() {
//         console.log(`At the end of the fourth quarter, we have a score of ${this.score} and fouls are ${this.fouls}`);
//         return this;
//     }
// };

// // Modify the methods to make this work:
// //basketballGame.basket().freeThrow().foul().basket().freeThrow().basket().threePointer().halfTime().threePointer().foul().foul().foul().threePointer().endOfRegulation();
// //basketballGame.foul().foul().basket().halfTime();//testing fouls
// basketballGame.freeThrow().halfTime().foul().basket().endOfRegulation();//continuation after half


//Question 8

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }
// const lasVegas = {//New object, part b.
//     name:'Las Vegas',
//     state:'Nevada',
//     casinos: 64,
//     timezone: 'America/Los_Angeles'
// }
// function printCity(city) {

//     for (let key in city) {//for...in loop attempt, part a. 
//         console.log(`${key}: ${city[key]}`)
//     }
// }

// printCity(sydney);
// printCity(lasVegas);

//Question 9

// let teamSports = ['Hockey', 'Volleyball'];
// let moresports = teamSports;//New array, part a. 

// let dog1 = 'Bingo';
// let dog2 = dog1;//new dog variable, part b.
// dog2 = 'Benji';

// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1;
// cat2.name = 'Bonkers'; 
// // console.log(cat1.name);//new cat, part c. 
// // console.log(cat2.name);

// teamSports.push('Cricket');
// moresports.unshift('Hockey');
// // console.log(teamSports);
// // console.log(moresports);

// // console.log(dog1);
// // console.log(dog2);

// console.log('Original sports:', teamSports);
// console.log('Original dog:', dog1);
// console.log('Original cat:', cat1);//For part e, teamSports changed cause they reference the same array, dog1 doesn't change cause its a copy of dog2, and cat1 does change cause cat2 references the same object.

// //For part e
// let teamSports = ['Hockey', 'Volleyball'];
// let moresports = [...teamSports]; // Creates a new independent array
// let dog1 = 'Bingo';
// let dog2 = dog1;
// dog2 = 'Benji';

// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = { ...cat1 }; // Creates a new independent object

// moresports.push('Cricket');
// moresports.unshift('Hockey');
// cat2.name = 'Bonkers';

// console.log('Original sports:', teamSports);
// console.log('Original dog:', dog1);
// console.log('Original cat:', cat1);

// console.log('Copied sports:', moresports);
// console.log('Copied dog:', dog2);
// console.log('Copied cat:', cat2);

// Question 10

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }

// //Create first person, part a.
// let person1 = new Person('Kyle','30')
// //Create second person, part b.
// let person2 = new Person('Tim', '40')
// //Print both people,part c. 
// console.log(person1)
// console.log(person2)
// //PersonClass Constructor function, part d.
// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
// }
// let person3 =  new Person('Paul','22')
// console.log(person3)
// //canDrive method, part e. 
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.canDrive = function() {
//         return this.age >= 16
//     }
// }
// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//      canDrive() {
//         return this.age >= 16;
//     }
// }


