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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    k = k % 26;  

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let upper = false;

        if (char >= 'A' && char <= 'Z') {
            upper = true;
            char = char.toLowerCase();  
        }

        if (char >= 'a' && char <= 'z') {
            let originalIndex = alphabet.indexOf(char);
            let newIndex = (originalIndex + k) % 26;
            let newChar = alphabet[newIndex];

            result += upper ? newChar.toUpperCase() : newChar;
        } else {
            result += char;
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
