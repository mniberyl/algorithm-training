function gradingStudents(grades) {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38 || grades[i] % 5 < 3) {
            result.push(grades[i]);
        } else if (grades[i] % 5 >= 3) {
            result.push(grades[i] + (5 - grades[i] % 5))
        }
    }
    return result;
}