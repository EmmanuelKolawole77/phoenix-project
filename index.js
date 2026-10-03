// alert('awayooo')

document.getElementById('upBro').textContent = 'Bloody'
document.getElementById('downBro').textContent = 'Bloody'

// let age = 54
let price = 22.828
let gender = 'male'
console.log(gender);
// console.log(`You are a crazy ${gender}. You are a crazy rat, ${age}`);


let online = false
let forSale = true
console.log(`You are a fool: ${online}. But is that car ${forSale}`);
console.log(typeof online);

// confirm('are you here?')

let fullName = 'Bro code';
let age = 23;
let isStudent = false

document.getElementById('p1').textContent = `You are full of surprises, ${fullName}`;
document.getElementById('p2').textContent = `You are full of surprises, ${age}`;
document.getElementById('p3').textContent = `Is it ${!isStudent} that you are a student?`;

let student = 30
// student += 1
student **= 3
student--
console.log(student);

let username = window.prompt('what is your name')
console.log(username);

let height = prompt('how old are you')
height = Number (height)
console.log(typeof height);


let x
let y
let z = ''

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// const pi = 3.1415
// let radius;
// let circumference;

// radius = prompt('Enter your radius')
// radius = Number(radius)

// circumference = 2 * pi * radius
// console.log(circumference);

const pi = 3.1415
let radius;
let circumference;
let displayArea = document.getElementById('show');

function result() {
    radius = document.getElementById('inpute').value
    document.getElementById('inpute').value = ''
    radius = Number(radius)
    circumference = 2 * pi * radius 
    displayArea.textContent = `${circumference}cm` 
}

// let count = document.getElementById('displayHere')
let count = 0 
function increaseBtn() {
    count++;
    document.getElementById('displayHere').textContent = count 
}

function decreaseBtn(){
    count--
    document.getElementById('displayHere').innerHTML = count
}

function resetBtn(){
    count = 0
    document.getElementById('displayHere').innerHTML = count
}

let s = 5.9
let t = 2
let u 

// u = Math.pow(s,t)
u = Math.sqrt(t)

console.log(u);

let min = 1
let max = 6
let randomNum

function rollIt(){
    randomNum = Math.floor(Math.random () * max) + min
    document.getElementById('showOff').textContent = randomNum
    
}

let displayPlace = document.getElementById('elShow')
function shoWed() {
    let fool = 'Happy New YEAR'
    console.log(fool);
    displayPlace.value = fool
}

let showHuman = document.getElementById('showHuman')
let kinAge = document.getElementById('kinAge')
function showMitt(){
    age = kinAge.value
    document.getElementById('kinAge').value = ''
    if (age == '') {
        showHuman.textContent = `Enter a valid input`
        console.log('btooo');
    } else if (age >= 2 && age <= 13) {
        showHuman.textContent = `You are a child.`
    } else if (age >= 14 && age <= 19) {
        showHuman.textContent = `You are a teen.`
    } else if ( age >= 20 && age <= 29){
        showHuman.textContent = `You are a young adult.`
    } else if( age >= 30){
        showHuman.textContent = `You are a nation builder. I hope the world is kind to you.`
    } else {
        showHuman.textContent = `Something is seriously wrong here.`
    }

}

// const 

// function agamaSquare(){
    
// }



