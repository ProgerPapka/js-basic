function isInteger(n) {
    return (n | 0) === n;
}

function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recSumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + recSumTo(n - 1);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function isBinary(n) {
    return (n & (n - 1)) === 0;
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function getOperationFn(initialValue, operatorFn = (a, b) => a) {
    let storedValue = initialValue;
    return function(newValue) {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

function sequence(start = 0, step = 1) {
    return function() {
        const currentValue = start;
        start += step;
        return currentValue;
    };
}

function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if (typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false;
    }

    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};