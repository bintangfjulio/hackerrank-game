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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b)
    
    var sumLower = 0
    var sumUpper = 0
    var counter = 0
    var size = arr.length
    
    while(counter < 4){
        sumLower += arr[counter]
        sumUpper += arr[(size - 1) - counter]
        counter++
    }
    
    console.log(`${sumLower} ${sumUpper}`)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
