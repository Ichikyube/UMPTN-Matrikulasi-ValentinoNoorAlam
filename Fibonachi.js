function fibonacci(len) {
    var number = [];
    number[0] = 0;
    number[1] = 1;
    number[2] = 1;
    for (i = 3; i < len; i++) {
        number[i] = number[i - 1] + number[i - 2];
    }
    return number;
}
console.log(fibonacci(100))

