let numberArr = [1, 5, -4];
let sum = 0;
for(i=0; i<numberArr.length; i++) {
    sum += numberArr[i];
}

if(sum == 0) {
    console.log("Sum of 3 Integer is ZERO")
} else {
    console.log("Sum of 3 Integer is Not ZERO");
}