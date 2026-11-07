//Question 1
function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}
//part a
let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2
let counter1 = makeCounter();
counter1(); // 1
//part b & c
function makeCounter(startFrom, incrementBy) {//using incrementBy to fulfill B
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;//part c takes incrementBy up a notch
        console.log(currentCount);
        return currentCount;
    };
};
let counter1 = makeCounter(10, 5);
counter1();
counter1();
counter1();

//Question 2
function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
//part a: mesages will be delivered in the order of 4,3,2, and finaly 1. delayMsg details how long.
//part b
const delayMsg = (msg) => {//arrow function to start
    console.log(msg);
};
setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms')
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
//part c
setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms')
//part d
clearTimeout(cancelTimerId);
//Question 3
function printMe() {
    console.log('printing debounced message');
}

printMe = debounce(printMe);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
//part a
function debounce(func) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(func, 1000);
    };
}
//part b&c
function debounce(func, ms) {
    let timerId;
    return function (msg) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func(msg), ms);
    };
}
function printMe(msg) {
    console.log(`Printing: ${msg}`);
}

const debouncedPrint = debounce(printMe, 1000);
setTimeout(debouncedPrint, 100, 'First');
setTimeout(debouncedPrint, 200, 'Second');
setTimeout(debouncedPrint, 300, 'Third');

//Question 4
//part a
function printFibonacci(limit) {
    let a = 0, b = 1, count = 0;
    const timerId = setInterval(() => {
        console.log(a);
        [a, b] = [b, a + b];
        count++;

        if (count >= limit) {
            clearInterval(timerId);
        }
    }, 1000);
}
printFibonacci(7);
//part b
function printFibonacci(limit) {
    let a = 0, b = 1, count = 0;
    function printNext() {
        console.log(a);
        [a, b] = [b, a + b];
        count++;
        if (count < limit) {//included limit for part c
            setTimeout(printNext, 1000);//include setTimeout 
        }
    }
    setTimeout(printNext, 1000);
}
printFibonacci(7);

//Question 5
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description.bind(car), 200); //fails
//part a 
setTimeout(() => car.description(), 200); 
//part b
car = { ...car, year: 2026 }; 
//part c
setTimeout(() => car.description(), 200);
car = { ...car, year: 2026 };//calling on year of cloned car, 2026. 
//part d
const boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);
//part e
const boundDescription = car.description.bind(car);
car = { ...car, model: 'Cayenne' };
setTimeout(boundDescription, 200);

//Question 6
function multiply(a, b) {
    console.log(a * b);
}
multiply.delay(500)(5, 5); // Prints 25 after 500ms
//part a
Function.prototype.delay = function(ms) {
    const originalFunction = this;
    return function(a, b) {
setTimeout(() => originalFunction.call(this, a, b), ms);
    };
};
function multiply(a, b) {
    console.log(a * b);
}
multiply.delay(500)(5, 5);
//part b
Function.prototype.delay = function(ms) {
    const originalFunction = this;
    return function(...args) {
        //part b, using apply to allow for any numberof arguments to pass
        setTimeout(() => originalFunction.apply(null, args), ms);
    };
};
function multiply(a, b, c, d) {//part c
    console.log(a * b * c * d);
}
multiply.delay(500)(2, 3, 4, 5); // 120

//Question 7
class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()
//part a
class PreciseClock extends DigitalClock {
    constructor(prefix, precision=1000) {
        super(prefix);
        this.precision = precision;
    } start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);//schedule repeated calls
    }
}
const fastClock = new PreciseClock('fast clock:', 250);
fastClock.start();
setTimeout(() => fastClock.stop(), 1000);//stop after 1 second
//part b
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeUpTime = wakeupTime;
    }
    display() {
        super.display();//use parent display
        const date = new Date();
        const currentTime = [//format time 
            String(date.getHours()).padStart(2, '0'),
            String(date.getMinutes()).padStart(2, '0')
        ].join(':');
        if (currentTime === this.wakeUpTime) {
            console.log('Wake Up');//test wake up 
            this.stop();
        }
    }
}
const myAlarmClock = new AlarmClock('alarm clock:', '07:00');
myAlarmClock.start();

//Question 8
function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // Works
console.log(validatedOrderItem(123));           // Throws an error
//part a 
function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}
function validateStringArg(func) {
    return function(itemName) {
        if (typeof itemName !== 'string') {
            throw new Error('Argument must be a string');
        }
        return func(itemName);
    };
}
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Garmin Venu 3"));
console.log(validatedOrderItem("Cheese"));
//part b 
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}
console.log(orderItems("Garmin Venu 3", "Apple Watch", "Fitbit")); 
//part c
function validateStringArg(func) {
    return function(...args) {
        for (let arg of args) {//loop through args
            if (typeof arg !== 'string') {//checks each arg if string
                throw new Error('All arguments must be strings');
            }
        }
        return func(...args);//spread to whole array
    };
}
//part d
try {
    console.log(validatedOrderItem("Gramin", 123));
} catch (error) {
    console.error(`Error found: ${error.message}`); // Logs: All arguments must be strings
}
//Question 9
function randomDelay() {
    // Your code goes here
}

randomDelay().then(() => {
    console.log('There appears to have been a delay.');
});
//part a
function randomDelay() {
    return new Promise((resolve, reject) => {
        const seconds = Math.floor(Math.random() *20) + 1
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}
randomDelay().then(() => {
    console.log('There appears to have been a delay.');
}); 
//part b
function randomDelay() {
    return new Promise((resolve, reject) => {
        const seconds = Math.floor(Math.random() * 20) + 1;

        setTimeout(() => {
            if (seconds % 2 === 0) {
                resolve();
            } else {
                reject(new Error('The delay was an odd number of seconds.'));
            }
        }, seconds * 1000);
    });
}
randomDelay()//part c iclues a catch to handle the error
    .then(() => {
        console.log('There appears to have been a delay in even seconds.');
    })
    .catch((error) => {
        console.log(error.message);
    });
//part d
function randomDelay() {
    return new Promise((resolve, reject) => {
        const seconds = Math.floor(Math.random() * 20) + 1;

        setTimeout(() => {
            if (seconds % 2 === 0) {
                resolve(seconds);
            } else {
                reject(new Error(`Failed after ${seconds} seconds.`));
            }
        }, seconds * 1000);
    });
}

randomDelay()
    .then((seconds) => {
        console.log(`Success after ${seconds} seconds.`);
    })
    .catch((error) => {
        console.log(error.message);
    });
//Question 10
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch;
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.
async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}
// Test the async/await version with valid and invalid URLs
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Valid URL data:', data))
    .catch(error => console.error('Valid URL error:', error.message));
fetchURLData('https://jsonplaceholder.typicode.com/invalid-url')
    .then(data => console.log('Invalid URL data:', data))
    .catch(error => console.error('Invalid URL error:', error.message));
// Extension: Fetch multiple URLs using Promise.all
async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLData(url));
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        throw new Error(`Error fetching multiple URLs: ${error.message}`);
    }
}
// Test the fetchMultipleURLs function
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',];
fetchMultipleURLs(urls)
    .then(results => console.log('Multiple URL data:', results))
    .catch(error => console.error('Multiple URL error:', error.message));