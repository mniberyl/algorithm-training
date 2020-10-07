function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagonalSum = leftDiagonalSum + arr[i][i];
        rightDiagonalSum = rightDiagonalSum + arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}