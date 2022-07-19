const prompt = require('prompt-sync')();

let n = prompt('Enter The Size Of Array: ');
const a = new Array(n+1);

a[n]= -1;

for (let i = 0; i < n; i++) {
    a[i] = prompt('');
}

if(n===1){
    console.log("1");
    return;
}

let ans = 0;
let mx = -1;


for (let i = 0; i < n; i++) {
  if(Number(a[i])>mx && Number(a[i])> Number(a[i+1])){
    ans++;
  }
  mx = Math.max(mx, Number(a[i]));
}
console.log('Record Breaking Days')
console.log(ans);

/* for (let i = 0; i < n; i++) {
  console.log(a[i]);
}
 */
