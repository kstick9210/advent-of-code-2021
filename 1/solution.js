const fs = require('fs');

const strings = fs.readFileSync('./1/input.txt', 'utf-8').split('\n');
const input = strings.map(s => parseInt(s));

function dayOnePartOne(input) {
    let depthIncreased = 0;
    input.forEach((i, index) => {
        if (i > input[index - 1]) {
            depthIncreased++
        }
    })
    console.log(depthIncreased);
}

dayOnePartOne(input);

function dayOnePartTwo(input) {
    let sumIncreased = 0;
    input.forEach((i, index) => {
        let index2 = index + 1;
        let index3 = index + 2;
        let index4 = index + 3;
        let sumA = i + input[index2] + input[index3];
        let sumB = input[index2] + input[index3] + input[index4];
        if (sumB > sumA) sumIncreased++
    })
    console.log(sumIncreased);
}

dayOnePartTwo(input);