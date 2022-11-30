
let str = "naman"

let rev = "";

for(let i=str.length; i>=0; i--){
    rev += str[i];
}

if(rev == str[i]){
  console.log("It is Palindrome");
}
else{
  console.log("It is not Palindrome");
}