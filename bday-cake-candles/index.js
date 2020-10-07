function bdayCakeCandles(candles) {
    let result = '';
    let maxCandle = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxCandle) {
            result++;
        }
    }
    return result;
}