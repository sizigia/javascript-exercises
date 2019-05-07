const fibonacci = function (element) {
    let n = parseInt(element, 10) - 1;

    if (n < 0) {
        return "OOPS";
    }

    let fibo = {
        one: 0,
        two: 1,
    }

    while (n > 1, n--) {
        fibo.sum = fibo.one + fibo.two;
        fibo.one = fibo.two;
        fibo.two = fibo.sum;
    }

    return fibo.two;
}

module.exports = fibonacci
