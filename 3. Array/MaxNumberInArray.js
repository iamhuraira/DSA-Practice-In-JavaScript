const  prompt = require("prompt-sync")()

let mx = -190000000;
let n = prompt("Enter The Size Of Array: ");
const a = new Array(n);


for(let i=0; i<n; i++){
    a[i] = prompt('');  
}

for (let i=0; i<n; i++) {
  mx = Math.max(mx,a[i]);
  console.log(mx)
}

/* for (let i = 0; i < n; i++) {
  console.log(a[i]);
}
 */