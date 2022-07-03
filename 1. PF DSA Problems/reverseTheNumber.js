const prompt = require("prompt-sync")();

var  inputNumber = prompt("What is Your Number For reverse  :   ");
/* let number = +inputNumber;

let lastDigit;
let reverse = 0;

while(number!=0){
    lastDigit = number % 10;
    reverse = (reverse*10) + lastDigit;
    number = Math.floor(number/10);
} */

// Shortcut Method in JS

let reverse = 0;

reverse = Number(String(inputNumber).split('').reverse(1234).join(''))

console.log(`Your Number Is :  ${inputNumber}`);
console.log(`Your Reverse Number Is :  ${reverse}`);