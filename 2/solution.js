const fs = require('fs');

const strings = fs.readFileSync('./2/input.txt', 'utf-8').split('\n');
const forward = strings.filter(x => x.includes('forward')).map(x => parseInt(x.slice(7)));
const down = strings.filter(x => x.includes('down')).map(x => parseInt(x.slice(4)));
const up = strings.filter(x => x.includes('up')).map(x => parseInt(x.slice(3)));

function getVal(arr) {
    const reducer = (prev, current) => prev + current;
    return arr.reduce(reducer);
}

function dayTwoPartOne(forward, down, up) {
    const h = getVal(forward);
    const v = getVal(down) - getVal(up);
    console.log(h*v);
}

dayTwoPartOne(forward, down, up);

function dayTwoPartTwo(input) {
    let h = 0;
    let d = 0;
    let a = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('forward')) {
            let val = parseInt(input[i].slice(7));
            h += val;
            d += a * val;
        } else if (input[i].includes('down')) {
            let val = parseInt(input[i].slice(4));
            a += val;
        } else {
            let val = parseInt(input[i].slice(3));
            a -= val;
        }
    }
    console.log(h*d);
}

dayTwoPartTwo(strings);