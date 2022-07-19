const prompt = require('prompt-sync')();

let n = prompt('Enter The Size Of Array: ');
const a = new Array(n);

for (let i = 0; i < n; i++) {
  a[i] = prompt('');
}
console.log('Largest Arthmetic Sub Array of Array:   ');

let ans = 2;
let pd = Number(a[1])-Number(a[0]);
let curr = 2;
let j = 2;
while(j<n){
    if(pd === Number(a[j])-Number(a[j-1])){
        curr++;
    }
    else{
        pd = Number(a[j]) - Number(a[j - 1]);
        curr=2;
    }
    ans = Math.max(ans,curr);
    j++
}
console.log(ans);

