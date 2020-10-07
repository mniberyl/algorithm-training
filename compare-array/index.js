function compareArray(a, b) {
    let Alice = 0;
    let Bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            Alice++;
        } else if (a[i] < b[i]) { Bob++ }
    } return [Alice, Bob];
}