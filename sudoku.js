let board = [
    [
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ],
    [
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ],
    [
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    ]
];





/*
    [0][0][0][0], [0][0][0][1], [0][0][0][2]  | [0][1][0][0], [0][1][0][1], [0][1][0][2]  |  [0][2][0][0], [0][2][0][1], [0][2][0][2]
    [0][0][1][0], [0][0][1][1], [0][0][1][2]  | [0][1][1][0], [0][1][1][1], [0][1][1][2]  |  [0][2][1][0], [0][2][1][1], [0][2][1][2]
    [0][0][2][0], [0][0][2][1], [0][0][2][2]  | [0][1][2][0], [0][1][2][1], [0][1][2][2]  |  [0][2][2][0], [0][2][2][1], [0][2][2][2]
    ------------------------------------------------------------------------------------------------------------------------------------
    [1][0][0][0], [1][0][0][1], [1][0][0][2]  | [1][1][0][0], [1][1][0][1], [1][1][0][2]  |  [1][2][0][0], [1][2][0][1], [1][2][0][2]
    [1][0][1][0], [1][0][1][1], [1][0][1][2]  | [1][1][1][0], [1][1][1][1], [1][1][1][2]  |  [1][2][1][0], [1][2][1][1], [1][2][1][2]
    [1][0][2][0], [1][0][2][1], [1][0][2][2]  | [1][1][2][0], [1][1][2][1], [1][1][2][2]  |  [1][2][2][0], [1][2][2][1], [1][2][2][2]
    ------------------------------------------------------------------------------------------------------------------------------------
    [2][0][0][0], [2][0][0][1], [2][0][0][2]  | [2][1][0][0], [2][1][0][1], [2][1][0][2]  |  [2][2][0][0], [2][2][0][1], [2][2][0][2]
    [2][0][1][0], [2][0][1][1], [2][0][1][2]  | [2][1][1][0], [2][1][1][1], [2][1][1][2]  |  [2][2][1][0], [2][2][1][1], [2][2][1][2]
    [2][0][2][0], [2][0][2][1], [2][0][2][2]  | [2][1][2][0], [2][1][2][1], [2][1][2][2]  |  [2][2][2][0], [2][2][2][1], [2][2][2][2]

*/


const validateInSubgrid = (number, firstIndex, secondIndex) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (number == board[firstIndex][secondIndex][i][j]) {
                return false;
            }
        }
    }
    return true;
}

const validateInRow = (number, firstIndex, thirdIndex) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (number == board[firstIndex][i][thirdIndex][j]) {
                return false;
            }
        }
    }
    return true;
}

const validateInColumn = (number, secondIndex, fourthIndex) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (number == board[j][secondIndex][i][fourthIndex]) {
                return false;
            }
        }
    }
    return true;
}

const asignNumberToGrid = (firstIndex, secondIndex, thirdIndex, fourthIndex) => {

    asignSuccess = false;
    for (let number = 1; number < 10; number++) {
        console.log(`Evalúa con el número: ${number}`)
        if ((validateInSubgrid(number, firstIndex, secondIndex)) && (validateInRow(number, firstIndex, thirdIndex)) && (validateInColumn(number, secondIndex, fourthIndex))) {
            board[firstIndex][secondIndex][thirdIndex][fourthIndex] = number;
            console.log(number);
            asignSuccess = true;
            if (fourthIndex == 2) {
                if (thirdIndex == 2) {
                    if (secondIndex == 2) {
                        if (firstIndex < 2) {
                            if (asignNumberToGrid((firstIndex + 1), 0, 0, 0)) {
                                break;
                            } else {
                                continue;
                            };
                        } else {
                            return asignSuccess;
                        }
                    } else {
                        if (asignNumberToGrid(firstIndex, (secondIndex + 1), 0, 0)) {
                            break;
                        } else {
                            continue;
                        }
                    }
                } else {
                    if (asignNumberToGrid(firstIndex, secondIndex, (thirdIndex + 1), 0)) {
                        break;
                    } else {
                        continue;
                    }
                }
            } else {
                if (asignNumberToGrid(firstIndex, secondIndex, thirdIndex, (fourthIndex + 1))) {
                    break;
                } else {
                    continue;
                }
            }
        } else {

            continue;
        }
    }
    if (!asignSuccess) {
        board[firstIndex][secondIndex][thirdIndex][fourthIndex] = 0;
        console.log(`Retrocede en: [${firstIndex}][${secondIndex}][${thirdIndex}][${fourthIndex}]`)
    }
    return asignSuccess;
}


const generateVisualBoard = (board) => {
    visualBoard = "";
    for (let firstIndex = 0; firstIndex < 3; firstIndex++) {
        for (let thirdIndex = 0; thirdIndex < 3; thirdIndex++) {
            for (let secondIndex = 0; secondIndex < 3; secondIndex++) {
                for (let fourthIndex = 0; fourthIndex < 3; fourthIndex++) {
                    visualBoard += `${board[firstIndex][secondIndex][thirdIndex][fourthIndex]} `;
                }
                visualBoard += ' |  '
            }
            visualBoard += `\n`
        }
        visualBoard += `----------------------------\n`
    }
    return visualBoard;
}

asignNumberToGrid(0, 0, 0, 0);
console.log(generateVisualBoard(board));



