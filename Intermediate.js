//Question 1

function ucFirstLetters(str) {
    let words = str.split(" ");//split into array
    let capitalizedWords = []; //aray for capitalized words
    for (let word of words) {//getting loopy through each word
        let firstLetter = word[0].toUpperCase();//target first letter of places to capitalize
        let remainingLetters = word.slice(1);//capture rest of letters
        let newWord = firstLetter + remainingLetters;//combine capitalized letters with words
        capitalizedWords.push(newWord);//save capitalized word
    }
    let result = capitalizedWords.join(" ");//join newly capitalized and formed words with spaces
    return result;
}
//Few tests through console.log
console.log(ucFirstLetters("new york city"));
console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("san francisco"));

//Question 2
//part a
function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + "…";
    } else {
        return str;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))
//part b

function truncate(str, max) {
    return (str.length > max) ? str.slice(0, max) + "…" : str;//ternary substitution 
}
console.log(truncate('This text will be truncated if it is too long', 25))

//Question 3
//part a
const animals = ['Tiger', 'Giraffe']
animals.push("Lion");
animals.push("Cobra");//adding 2 new values to end
console.log(animals)
//part b
const animals = ['Tiger', 'Giraffe']
animals.unshift("Lion");
animals.unshift("Cobra");//adding 2 new values to beginning
console.log(animals)
//part c
const animals = ['Tiger', 'Giraffe']
animals.sort();
console.log(animals)
//part d
const animals = ["Cobra", "Giraffe", "Lion", "Tiger"];//0123, replace middle value
let middleIndex = Math.floor(animals.length / 2);
console.log(middleIndex)

function replaceMiddle(animals, newAnimal) {//now we create as a function
    let middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newAnimal;
    return animals;
}
let animals = ["Cobra", "Giraffe", "Lion", "Tiger"];
replaceMiddle(animals, "Elephant");
console.log(animals);
//part e

function findAnimals(animals, search) {//provide array from which to find these animals in
    let matches = [];
    for (let animal of animals) {
        if (animal.toLowerCase().startsWith(search.toLowerCase())) {
            matches.push(animal);
        }
    }
    return matches;
}
let animals = ["Tiger", "Giraffe", "Lion"];
console.log(findAnimals(animals, "ti"))

//Question 4

const capitalize = (str) => {
    if (typeof str !== 'string' || !str.length) return str;
    return str[0].toUpperCase() + str.substring(1);
}

const camelCase = (cssProp) => {
    return cssProp
        .split('-')
        .map((word, index) => {
            if (!index) return word;
            return capitalize(word);
        })
        .join('');
};

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('display'));


//Question 5
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(typeof fixedTwenty)
console.log(fixedTwenty + fixedTen)

const currencyOperation = (float1 = 0.0, float2 = 0.0, operation = '+', numDecimals = 3) => {
    let _float1 = float1 * 100;
    let _float2 = float2 * 100;
    let result = 0;

    switch (operation) {
        case '-':
            result = (_float1 - _float2) / 100;
            break;
        case '*':
            result = (_float1 * _float2) / 10000;
            break;
        case '/':
            result = _float1 / _float2;
            break;
        case '+':
        default:
            result = (_float1 + _float2) / 100;
            break;
    }

    return Number(result.toFixed(numDecimals));
}


console.log(currencyOperation(0.1, 0.2));
console.log(currencyOperation(0.1, 0.2, '+'));
console.log(currencyOperation(0.1, 0.2, '+', 5));




const currencyOperation = (
    float1 = 0,
    float2 = 0,
    operation = '+',
    numDecimals = 2
) => {
    const factor = 10 ** numDecimals;

    let _float1 = Math.round(float1 * factor);
    let _float2 = Math.round(float2 * factor);
    let result = 0;

    switch (operation) {
        case '-':
            result = (_float1 - _float2) / factor;
            break;
        case '*':
            result = (_float1 * _float2) / (factor * factor);
            break;
        case '/':
            result = _float1 / _float2;
            break;
        case '+':
        default:
            result = (_float1 + _float2) / factor;
            break;
    }

    return Number(result.toFixed(numDecimals));
};

console.log(currencyOperation(0.1, 0.2));
console.log(currencyOperation(0.3, 0.1, '-'));
console.log(currencyOperation(0.1, 0.2, '*'));
console.log(currencyOperation(0.2, 0.1, '/'));
console.log(currencyOperation(0.123, 0.456, '+', 3));
console.log(typeof currencyOperation(0.1, 0.2));

//Question 6

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
    let result = [];
    for (let item of duplicatesArray) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(unique([1, "1", 2, 2, "2", 3]));

const accessories = ['shoes', 'hat', 'belt'];//additional array
console.log(unique(accessories));

//Question 7
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

const book = books.find(book => book.id === 3);
console.log(book.title);
console.log(book.author);

//part a
function getBookTitle(bookId) {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    const book = books.find(book => book.id === bookId);

    return book?.title;
}
console.log(getBookTitle(3));
console.log(getBookTitle(1));
//part b
function getOldBooks() {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    const oldbooks = books.filter(book => book.year < 1950);

    return oldbooks;
}
console.log(getOldBooks());
//part c
function addGenre() {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    const updatedBooks = books.map(book => {
        return {
            ...book,
            genre: 'classic'
        };
    });

    return updatedBooks;
}

console.log(addGenre());
//part D
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
// const matchingBooks = books.filter(book =>
//     book.author.startsWith('G')

// );
// const titles = matchingBooks.map(book => book.title);
function getTitles(authorInitial) {
    return books
        .filter(book => 
book.author.startsWith(authorInitial))
        .map(book => book.title);
}
console.log(getTitles('J'));
//part e
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function latestBook() {
    let latestYear = 0;

    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });

    const newestBook = books.find(book => book.year === latestYear);

    return newestBook;
}
console.log(latestBook());
console.log(typeof latestBook());

//Question 8
//part a
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map();
phoneBookDEF.set('Luis', '0412345678');
phoneBookDEF.set('Esme', '0423456789');
phoneBookDEF.set('Antonio', '0434567890');

console.log(phoneBookDEF);
//part b
const phoneBookDEF = new Map([
    ['Luis', '0412345678'],
    ['Esme', '0423456789'],
    ['Antonio', '0434567890']
]);

console.log(phoneBookDEF.size);// 3
console.log(phoneBookDEF.get('Esme'));//'0423456789'
console.log(phoneBookDEF.has('Luis')); //true
//part c
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');
phoneBookABC.set('Caroline', '0455221555');
console.log(phoneBookABC.get('Caroline'));
//part d
const phoneBookABC = new Map([
    ['Annabelle', '0412312343'],
    ['Barry', '0433221117'],
    ['Caroline', '0455221555']
]);
const phoneBookDEF = new Map([
    ['Daniel', '0412345678'],
    ['Esme', '0423456789'],
    ['Frank', '0434567890']
]);
function printPhoneBook(contacts) {
    for (const [name, phone] of contacts) {
        console.log(`${name}: ${phone}`);
    }
}
console.log('Phone Book ABC:');
printPhoneBook(phoneBookABC);
//part e
const phoneBook = new Map([
    ...phoneBookABC,
    ...phoneBookDEF
]);
//part f
console.log('All Contact Names:');
for (const name of phoneBook.keys()) {
    console.log(name);
}

//Question 9
let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};
//part a
function sumSalaries(salaries) {
    let total = 0;
    for (const salary of Object.values(salaries)) {
        total += salary;}
        return total;
}
//console.log(salaries)
//part b
let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};
function topEarner(salaries) {
    let highestSalary = -Infinity;
    let highestEarner = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            highestEarner = name;
        }
    }
return highestEarner;
}
//console.log(sumSalaries(salaries));
//console.log(topEarner(salaries));

//Question 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');
//part a
const today = new Date();
const minutesToday = today.getHours() * 60 + today.getMinutes();
console.log(`${minutesToday} minutes have passed today`);
//part b
const today = new Date();
const secondsToday = 
    today.getHours() * 3600 +
    today.getMinutes() * 60 +
    today.getSeconds ();
console.log(`${secondsToday} seconds have passed today`);
//part c
const today = new Date();
const birthday = new Date(1994, 12, 20);
function calculateAge(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return `I am ${years} years, ${months} months and ${days} days old`;
}
console.log(calculateAge(birthday,today));
//part d
function daysInBetween(date1, date2) {
    const first = Date.UTC(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
    );
    const second = Date.UTC(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
    );
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(second - first) / millisecondsPerDay;
}
const date1 = new Date(2026, 11, 11);
const date2 = new Date(2005, 04, 12);
console.log(daysInBetween(date1, date2));//7883