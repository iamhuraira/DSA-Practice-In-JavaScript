
function printN100(n){
  if(n>0){ 
    printN100(n-1);
   process.stdout.write(n + ' ');
  }

  return;
}

printN100(100);