const prompt = require('prompt-sync')();

let n = prompt('Enter The Size Of Array: ');
let s = prompt('Enter The Sum : ');
let userSum = Number(s);
const a = new Array(n);

for (let i = 0; i < n; i++) {
  a[i] = prompt('');
}

let i=0, j=0, st=-1, end=-1 , sum = 0

while (j < n && sum + Number(a[j]) <= userSum) {
  sum += Number(a[j]);
  j++;
}
if (sum === userSum) {
  console.log(`${i + 1}    ${j}`);
  return;
}

while(j<n){
  sum += Number(a[j]);
  while(sum>s){
    sum -= Number(a[i]);
    i++
  }
  if(sum === userSum){
    st = i+1;
    end = j+1;
    break;
  }
  j++
}

console.log(`${st}   and  ${end}`);