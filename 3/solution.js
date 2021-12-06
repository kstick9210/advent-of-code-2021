const fs = require('fs');

const strings = fs.readFileSync('./3/input.txt', 'utf-8').split('\n');

function dayThreePartTwoO2(input) {
    let inputCopy = [...input];
    let index = 0;
    do {
        counter = 0;
        inputCopy.forEach(x => {
            if (x[index] === '1') counter ++
        })
        if (counter >= (inputCopy.length / 2)) {
            inputCopy = inputCopy.filter(x => x[index] === '1');
        } else {
            inputCopy = inputCopy.filter(x => x[index] === '0');
        }
        index++
    } while (inputCopy.length > 1)
    console.log(parseInt(inputCopy[0], 2));
}

function dayThreePartTwoCO2(input) {
    let inputCopy = [...input];
    let index = 0;
    do {
        counter = 0;
        inputCopy.forEach(x => {
            if (x[index] === '0') counter ++
        })
        if (counter <= (inputCopy.length / 2)) {
            inputCopy = inputCopy.filter(x => x[index] === '0');
        } else {
            inputCopy = inputCopy.filter(x => x[index] === '1');
        }
        index++
    } while (inputCopy.length > 1)
    console.log(parseInt(inputCopy[0], 2));
}

function dayThreePartOne(input) {
    let oneBitCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // let oneBitCountArr = [0, 0, 0, 0, 0];
    input.forEach(x => {
        for (let i = 0; i < x.length; i++) {
            if (x[i] === '1') oneBitCountArr[i]++
        }
    })
    let gammaRate = '';
    let epsilonRate = '';
    oneBitCountArr.forEach(x => {
        if (x > (input.length / 2)) {
            gammaRate += '1';
            epsilonRate += '0';
        } else {
            gammaRate += '0';
            epsilonRate += '1';
        }
    })
}

dayThreePartOne(strings);
dayThreePartTwoO2(strings);
dayThreePartTwoCO2(strings);