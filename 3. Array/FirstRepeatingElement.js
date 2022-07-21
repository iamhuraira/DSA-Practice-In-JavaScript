const prompt = require('prompt-sync')();

let n = prompt('Enter The Size Of Array: ');
const a = new Array(n);

for (let i = 0; i < n; i++) {
  a[i] = prompt('');
}

const N = 1000002;

const idx = new Array(N);

for (let i = 0; i < N; i++) {
  idx[i] = -1;
}

let minidx = Number.MAX_VALUE;

for(let i=0; i<n; i++){
    if (Number(idx[a[i]]) !== -1) {
        // console.log(Number(idx[a[i]]));
      minidx = Math.min(minidx, Number(idx[a[i]]));
    //   console.log(minidx)
    } else {
      idx[a[i]] = i;
    }
}
if(minidx=== Number.MAX_VALUE){
    console.log(-1);
}else{
    console.log(minidx+1);
}