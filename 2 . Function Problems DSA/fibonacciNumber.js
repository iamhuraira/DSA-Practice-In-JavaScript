const prompt = require("prompt-sync")()

var number = prompt("Enter You End Point of Fibonacci Series:  ");

const fibonacciNumber = (i)=> {
    var n1=0;
    var n2=1;
    var nextNumber;

    for(let j=0; j<=i;j++){
        console.log(n1);
        nextNumber = n1+n2;
        n1 = n2;
        n2 = nextNumber

    }
}

fibonacciNumber(number);