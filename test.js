// // Write a function called make_avg() which will take an array of integers and
// // the size of that array and return the average of those values.

function ArrayAvg(myArray) {
    var i = 0, sum = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        sum = sum + myArray[i++];
}
    return sum / ArrayLen;
}
var myArray = [1, 5, 3];
var a = ArrayAvg(myArray);
console.log(a)


// // // 

let myArray = ["one", "two", "three", "four"];
for(let i = 0; i < myArray.length; i++){ 
console.log(myArray[i]);
}


const randomNumber = [9,1]
function randomNumberAvg (randomNumber){
    var i ,
    var sum = 0
    for (i=0 ; i < randomNumber.length ; i++){
        
        sum = sum + randomNumber[i++]
        
    }

    return sum/randomNumber.length 
}

const result = randomNumberAvg (randomNumber);
console.log(result);

