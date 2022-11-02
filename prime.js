function checkprime(num){
let counter=0;
for(let i=1;i<=num;i++){
if(i%2==0){
counter++}
}
if(counter==2){
return true
}

return false;
}

let ans= checkprime(5)

if(ans==true){console.log("prime")
}

else {console.log("Not prime")}