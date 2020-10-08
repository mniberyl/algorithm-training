function timeConversion(s) {
    let result = '';
    let hour = '00';
    if (s.includes('AM')) {
        if (s.slice(0, 2) === '12') {
            result = hour + s.slice(2, 8);
        } else {
            result = s.slice(0, 8);
        }
        return result;
    } else if (s.includes('PM')) {
        if (s.slice(0, 2) === '12') {
            result = s.slice(0, 8);
        } else {
            hour = Number(s.slice(0, 2)) + 12;
            result = hour + s.slice(2, 8);
        }
        return result;
    }
}