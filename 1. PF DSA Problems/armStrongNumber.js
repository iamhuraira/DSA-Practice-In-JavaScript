const prompt = require("prompt-sync")()
var inputNumber = prompt('Enter Your Number  :  ');

let number = +inputNumber;
let numberOFDigit = inputNumber.length;
let orignalNumber = +inputNumber;
let lastDigit;
let sum = 0;


while(number>0){
    lastDigit = number%10;
    sum += Math.pow(lastDigit, numberOFDigit);
    number = Math.floor(number/10);
}
if (sum === orignalNumber) {
    console.log("Your Number Is Armstrong Number :");    
}else{
        console.log('Your Number Is Not Armstrong Number :');
}