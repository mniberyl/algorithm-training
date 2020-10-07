function miniMaxSum(arr) {
    let sum = arr.reduce((acc, value) => {
        return acc + value;
    })
    let maxValue = sum - Math.max(...arr);
    let minValue = sum - Math.min(...arr);
    console.log(maxValue, minValue);
}