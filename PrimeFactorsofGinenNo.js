const ps = require("prompt-sync");
const prompt =ps();
let number =prompt("Enter The Number :");
//var number = Number(readline.question());

console.log(number);
let primeFactorArr = new Array();
for(i=1; i<number; i++){
    if(number%i==0) {
        let temp=1;

        for(j=2; j<i; j++) {
            if(i%j==0){
                temp=0;
                break;
            }
        }

        if(temp==1){
            primeFactorArr.push(i);
        } else {
            temp=1;
        }
    }
}

console.log(primeFactorArr);