'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var positive = 0
    var negative = 0
    var neutral = 0
    var size = arr.length
    
    arr.forEach((number) => {
        if (number > 0){
            positive++
        }
        else if(number < 0){
            negative++
        } 
        else{
            neutral++
        }
    })
    
    console.log((positive / size).toFixed(6))
    console.log((negative / size).toFixed(6))
    console.log((neutral / size).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
