function staircase(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            if (j > i) {
                result += " ";
            } else {
                result += "#";
            }
        }
        result += '\n';
    }
    return result;
}