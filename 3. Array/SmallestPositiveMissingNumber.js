const prompt = require('prompt-sync')();

let n = prompt('Enter The Size Of Array: ');
const a = new Array(n);

for (let i = 0; i < n; i++) {
  a[i] = prompt('');
}

const N = 1000002;

const check = new Array(N);

for (let i = 0; i < N; i++) {
  check[i] = 0;
}

for (let i = 0; i < n; i++) {
 
    if(Number(a[i])>=0){
        check[a[i]]= 1;
    }
}
let ans= -1;


for (let i = 0; i < N; i++) {
    if(Number(check[i])===0){
        ans = i;
        break;
    }
}
console.log(ans);

