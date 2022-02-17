function getRandomNumber(){
    return Math.floor(Math.random()*(999-100+1)+100);
}
let randomNoArr=new Array();
for(i=0;i<10;i++){
    randomNoArr.push(getRandomNumber());
}

console.log("RandomNumber :"+randomNoArr);

let firstLargest=randomNoArr[0]; 
let secondLargest=randomNoArr[0];
let firstSmallest=randomNoArr[0]; 
let secondSmallest=randomNoArr[0];
    for (i=0; i<10 ; i++)
     {
        if (firstLargest<randomNoArr[i])
        {
            secondLargest = firstLargest;
            firstLargest = randomNoArr[i];
        }
        if (firstSmallest>randomNoArr[i])
        {
            secondSmallest = firstSmallest;
            firstSmallest = randomNoArr[i];
        }

    }
console.log("Second Largest Number : "+secondLargest)
console.log("Second Smallest Number :"+secondSmallest)