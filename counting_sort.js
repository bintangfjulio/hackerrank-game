'use strict';

const fs = require('fs');

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let freq = {}
    let constrain = 100
    
    arr.forEach((number) => {
      if(freq[number]){
          freq[number]++
      } else{
          freq[number] = 1
      }
    })
    
    for(let i=0; i < constrain; i++){
        if(freq[i]){
            arr[i] = freq[i]
        } else {
            arr[i] = 0
        }
    }
    
    // const freq = new Array(constrain).fill(0);
    // arr.forEach((number) => {
    //     freq[number]++;
    // });
    
    // let sortedArr = [];
    // for (let i = 0; i < constrain; i++) {
    //     while (freq[i] > 0) {
    //         sortedArr.push(i);
    //         freq[i]--;
    //     }
    // }
    
    return arr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
