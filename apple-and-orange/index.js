function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesNum = 0;
    let orangesNum = 0;
    for (let i = 0; i < apples.length; i++) {
        let distance = a + apples[i];
        if (distance >= s && distance <= t) {
            applesNum++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let distance = b + oranges[i];
        if (distance >= s && distance <= t) {
            orangesNum++
        }
    }
    console.log(applesNum);
    console.log(orangesNum);
}