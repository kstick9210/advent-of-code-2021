const fs = require('fs');

const strings = fs.readFileSync('./4/input.txt', 'utf-8').split("\n\n");
const numsDrawn = strings[0].split(',').map(x => parseInt(x));
let boards = strings.slice(1);

function formatBoards(boards) {
    const regex1 = /\n/gi;
    const regex2 = /\s\s/gi;
    boards = boards.map(b => b.replace(regex1, ' '));
    boards = boards.map(b => b.replace(regex2, ' ').split(' ').filter(x => x).map(x => parseInt(x)));
    return boards;
}

const formattedBoards = formatBoards(boards);

function checkRows(board) {
    let winner = false;
    let checks = 1;
    let hStart = 0;
    let sum = 0;
    do {
        for (let i = hStart; i <= hStart + 4; i++) {
            sum += board[i]
        }
        if (sum === -5) {
            winner = true;
            break
        } else {
            sum = 0;
            checks++;
            hStart += 5;
        }
    } while (checks <= 5)
    return winner;
}

function checkCols(board) {
    let winner = false;
    let checks = 1;
    let vStart = 0;
    let sum = 0;
    do {
        for (let i = vStart; i <= vStart + 20; i += 5) {
            sum += board[i]
        }
        if (sum === -5) {
            winner = true;
            break
        } else {
            sum = 0;
            checks++;
            vStart++;
        }
    } while (checks <= 5)
    return winner;
}

function checkWinner(board) {
    let winner = checkRows(board);
    if (winner) {
        return winner;
    } else {
        winner = checkCols(board);
    }

    return winner;
}

function dayFourPartOne(numsDrawn, formattedBoards) {
    let index = 0;
    let winner = false
    let winningBoard;
    let winningNum;
    do {
        let currentDraw = numsDrawn[index];
        formattedBoards = formattedBoards.map(board => board.map(b => {
            if (b === currentDraw) {
               return b = -1;
            } else return b
        }));
        for (let i = 0; i < formattedBoards.length; i++) {
            winner = checkWinner(formattedBoards[i]);
            if (winner) {
                winningBoard = formattedBoards[i];
                winningNum = currentDraw;
                break
            }
        }
        index++
    } while (!winner)
    const unmarkedNums = winningBoard.filter(x => x !== -1);
    let unmarkedSum = 0;
    unmarkedNums.forEach(x => unmarkedSum += x);
    // console.log(winningNum*unmarkedSum);
}

dayFourPartOne(numsDrawn, formattedBoards);

//not working
function dayFourPartTwo(numsDrawn, formattedBoards) {
    let index = 0;
    let lastWinner = false
    let lastWinningBoard;
    let lastWinningNum;
    do {
        let currentDraw = numsDrawn[index];
        formattedBoards = formattedBoards.map(board => board.map(b => {
            if (b === currentDraw) {
               return b = -1;
            } else return b
        }));
        for (let i = formattedBoards.length - 1; i > 0; i--) {
            if (checkWinner(formattedBoards[i])) {
                formattedBoards.splice(i, 1);
            }
            // console.log('copy', boardsCopy)
        }
        if (formattedBoards.length === 1) {
            lastWinningBoard = formattedBoards[0];
            lastWinningNum = numsDrawn[index + 1];
            lastWinner = true;
        }
        index++
    } while (!lastWinner)
    const unmarkedNums = lastWinningBoard.filter(x => x !== -1 && x !== lastWinningNum);
    let unmarkedSum = 0;
    unmarkedNums.forEach(x => unmarkedSum += x);
    console.log(lastWinningBoard);
}

dayFourPartTwo(numsDrawn, formattedBoards)