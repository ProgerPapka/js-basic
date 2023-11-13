// Функция, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

// Функция, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const evenNumbers = [];
    for (let i = 2; i <= 20; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

// Функция, считающая сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Функция, считающая сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

// Функция, считающая факториал заданного числа
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Функция, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n !== 0) && ((n & (n - 1)) === 0);
}

// Функция, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Функция, которая принимает начальное значение и функцию операции
function getOperationFn(initialValue, operatorFn) {
    return operatorFn ? (newValue) => initialValue = operatorFn(initialValue, newValue) : () => initialValue;
}

// Функция создания генератора арифметической последовательности
function sequence(start = 0, step = 1) {
    let current = start - step;
    return function() {
        return current += step;
    };
}

// Функция deepEqual для глубокого сравнения
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;
    if (typeof firstObject != 'object' || firstObject == null ||
        typeof secondObject != 'object' || secondObject == null) return false;

    let keysA = Object.keys(firstObject), keysB = Object.keys(secondObject);
    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(firstObject[key], secondObject[key])) return false;
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

// Тесты
console.log("Функция, которая проверяет, является ли число целым используя побитовые операторы:");
console.log(isInteger(4)); // true
console.log(isInteger(4.5)); // false
console.log(isInteger(-20)); // true

console.log("\nФункция, которая возвращает массив четных чисел от 2 до 20 включительно:");
console.log(even()); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

console.log("\nФункция, считающая сумму чисел до заданного используя цикл:");
console.log(sumTo(5)); // 15
console.log(sumTo(10)); // 55

console.log("\nФункция, считающая сумму чисел до заданного используя рекурсию:");
console.log(recSumTo(5)); // 15
console.log(recSumTo(10)); // 55

console.log("\nФункция, считающая факториал заданного числа:");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

console.log("\nФункция, которая определяет, является ли число двойкой, возведенной в степень:");
console.log(isBinary(8)); // true
console.log(isBinary(14)); // false

console.log("\nФункция, которая находит N-е число Фибоначчи:");
console.log(fibonacci(10)); // 55
console.log(fibonacci(7)); // 13

console.log("\nФункция, которая принимает начальное значение и функцию операции:");
const sumFn = getOperationFn(10, (a, b) => a + b);
console.log(sumFn(5)); // 15
console.log(sumFn(3)); // 18

console.log("\nФункция создания генератора арифметической последовательности:");
const generator = sequence(5, 2);
console.log(generator()); // 5
console.log(generator()); // 7
console.log(generator()); // 9

console.log("\nФункция deepEqual для глубокого сравнения:");
console.log(deepEqual({ arr: [22, 33], text: 'text' }, { arr: [22, 33], text: 'text' })); // true
console.log(deepEqual({ arr: [22, 33], text: 'text' }, { arr: [22, 3], text: 'text2' })); // false
