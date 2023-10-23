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
    } else {
        return n + recSumTo(n - 1);
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function getOperationFn(initialValue, operatorFn) {
    if (typeof operatorFn !== 'function') {
        return () => initialValue;
    }
    return (newValue) => {
        initialValue = operatorFn(initialValue, newValue);
        return initialValue;
    };
}

function sequence(start = 0, step = 1) {
    return function () {
        const current = start;
        start += step;
        return current;
    };
}

function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if (
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object' ||
        firstObject === null ||
        secondObject === null
    )
        return false;

    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (
            !keys2.includes(key) ||
            !deepEqual(firstObject[key], secondObject[key])
        )
            return false;
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
