const prompt = require('prompt-sync')();

var number1 = prompt('Enter You Number :  ');

const fac = (i) => {
  var factorial = 1;
  for (let j = 2; j <= i; j++) {
    factorial *= j;
  }
  return factorial;
};

const facOfNumber = fac(number1);

console.log(facOfNumber);
