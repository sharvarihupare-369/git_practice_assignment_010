
let num =11;
let factors =0;
for(let i=0; i<=num; i++){
  if(num%i==0){
   factors++;
 }

if(factors == 3){
  console.log(num + "is prime");
}
else{
  console.log(num + "is not prime");
}