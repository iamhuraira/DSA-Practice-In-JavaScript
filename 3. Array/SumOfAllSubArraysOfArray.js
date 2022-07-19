const prompt = require('prompt-sync')();

let curr =0;
let n = prompt('Enter The Size Of Array: ');
const a = new Array(n);

for (let i = 0; i < n; i++) {
  a[i] = prompt('');
}
console.log("Sum Of Sub Array");
for (let i = 0; i < n; i++) {
   curr =0;
   for(let j=i ; j<n ; j++){
     curr += Number(a[j]);
     console.log(curr) 
   }
}

