function checkprime(num){

let count=0;
for(let i=0;i<=num;i++){
if(num%i==0){
count++}

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