// JavaScript Playground & Interactive Demos

// Header & Status elements update
document.getElementById('upBro').textContent = 'Welcome back!';
document.getElementById('downBro').textContent = 'Status: Active';

let fullName = 'Bro code';
let age = 23;
let isStudent = false;

document.getElementById('p1').textContent = `User: ${fullName}`;
document.getElementById('p2').textContent = `Age: ${age}`;
document.getElementById('p3').textContent = `Student Status: ${isStudent ? 'Active' : 'Not Enrolled'}`;

// Variables & Arithmetic operations
let price = 22.828;
let gender = 'male';
console.log(gender);

let online = false;
let forSale = true;
console.log(`Online: ${online}, For Sale: ${forSale}`);
console.log(typeof online);

let student = 30;
student **= 3;
student--;
console.log(student);

// Commented out blocking browser dialogs to avoid page freeze / prompt blocks
// let username = window.prompt('what is your name')
// console.log(username);

// let height = prompt('how old are you')
// height = Number (height)
// console.log(typeof height);

let x;
let y;
let z = '';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// Circumference Calculator logic
const pi = 3.14159;
let radius;
let circumference;
let displayArea = document.getElementById('show');

function result() {
    radius = document.getElementById('inpute').value;
    if (radius === '' || isNaN(radius)) {
        displayArea.textContent = 'Please enter a valid number';
        return;
    }
    document.getElementById('inpute').value = '';
    radius = Number(radius);
    circumference = 2 * pi * radius;
    displayArea.textContent = `${circumference.toFixed(2)} cm`;
}

// Number Counter logic
let count = 0;
function increaseBtn() {
    count++;
    document.getElementById('displayHere').textContent = count;
}

function decreaseBtn() {
    count--;
    document.getElementById('displayHere').textContent = count;
}

function resetBtn() {
    count = 0;
    document.getElementById('displayHere').textContent = count;
}

// Math power/sqrt demonstration
let s = 5.9;
let t = 2;
let u = Math.sqrt(t);
console.log(u);

// Dice Roller logic
let min = 1;
let max = 6;
let randomNum;

function rollIt() {
    randomNum = Math.floor(Math.random() * max) + min;
    document.getElementById('showOff').textContent = randomNum;
}

// Input Shower logic
let displayPlace = document.getElementById('elShow');
function shoWed() {
    let fool = 'Happy New Year!';
    console.log(fool);
    displayPlace.value = fool;
}

// Human Growth Stage Determiner logic
let showHuman = document.getElementById('showHuman');
let kinAge = document.getElementById('kinAge');

function showMitt() {
    let userAge = kinAge.value;
    kinAge.value = '';
    if (userAge === '') {
        showHuman.textContent = 'Please enter a valid age.';
        console.log('empty age input');
    } else {
        userAge = Number(userAge);
        if (userAge < 0) {
            showHuman.textContent = 'Age cannot be negative.';
        } else if (userAge >= 0 && userAge <= 1) {
            showHuman.textContent = 'You are an infant.';
        } else if (userAge >= 2 && userAge <= 13) {
            showHuman.textContent = 'You are a child.';
        } else if (userAge >= 14 && userAge <= 19) {
            showHuman.textContent = 'You are a teen.';
        } else if (userAge >= 20 && userAge <= 29) {
            showHuman.textContent = 'You are a young adult.';
        } else if (userAge >= 30) {
            showHuman.textContent = 'You are a nation builder. I hope the world is kind to you.';
        } else {
            showHuman.textContent = 'Something is seriously wrong here.';
        }
    }
}
