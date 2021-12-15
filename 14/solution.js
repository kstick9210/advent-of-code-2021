const fs = require('fs');

const strings = fs.readFileSync('./14/input.txt', 'utf-8').split('\n');
const start = strings[0];
const input = strings.slice(1).reduce((a, b) => ({...a, [b.slice(0,2)]: b.slice(6)}))

function dayFourteenPartOne(start, input) {
    let currentString = start;
    let step = 1;
    let newString;
    
    do {
        newString = currentString[0];
        for (let i = 0; i < currentString.length - 1; i++) {
            let currentPair = currentString.slice(i, i + 2);
            let newVal = input[currentPair] + currentPair[1];
            newString += newVal;
        }
        step++
        currentString = newString;
    } while (step < 11)

    let charCounts = {}
    for (const char of newString) {
        if (charCounts[char]) {
            charCounts[char]++
        } else {
            charCounts[char] = 1;
        }
    }
    let min = Infinity;
    let max = 0;
    for (char in charCounts) {
        if (charCounts[char] < min) min = charCounts[char];
        if (charCounts[char] > max) max = charCounts[char];
    }
    console.log(max-min);
}

dayFourteenPartOne(start, input);