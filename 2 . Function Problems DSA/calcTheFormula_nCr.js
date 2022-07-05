const prompt = require('prompt-sync')();
console.log("to Find the nCr formula Result:")

var n = prompt('Enter Value Of N :  ');
var r = prompt('Enter Value Of R :  ');

const fac = (i) => {
  var factorial = 1;
  for (let j = 2; j <= i; j++) {
    factorial *= j;
  }
  return factorial;
};

const nCr = fac(n)/(fac(n-r)*fac(r));
console.log(nCr);