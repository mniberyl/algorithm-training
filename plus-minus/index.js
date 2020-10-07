function plusMinus(arr) {
    let positiveValue = 0;
    let negativeValue = 0;
    let zeroValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveValue++;
        } else if (arr[i] < 0) { negativeValue++; } else if (arr[i] === 0) { zeroValue++; }
    }
    console.log((positiveValue / arr.length).toFixed(6));
    console.log((negativeValue / arr.length).toFixed(6));
    console.log((zeroValue / arr.length).toFixed(6));
}