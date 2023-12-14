// Проверка, является ли число целым с использованием побитовых операторов
function isInteger(n) {
    return (n ^ 0) === n;
}

// Возвращает массив четных чисел от 2 до 20
function even() {
    return Array.from({length: 10}, (_, i) => 2 * (i + 1));
}

// Расчет суммы чисел до заданного числа с использованием цикла
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Расчет суммы чисел до заданного числа с использованием рекурсии
function recSumTo(n) {
    return n === 1 ? 1 : n + recSumTo(n - 1);
}

// Расчет факториала заданного числа
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

// Определение, является ли число степенью двойки
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Нахождение N-го числа Фибоначчи
function fibonacci(n) {
    let [a, b] = [0, 1];
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Функция, возвращающая функцию, выполняющую операцию
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function (newValue) {
        if (operatorFn) {
            storedValue = operatorFn(storedValue, newValue);
        }
        return storedValue;
    };
}

// Создание генератора арифметической последовательности
function sequence(start = 0, step = 1) {
    let current = start;
    return function () {
        const result = current;
        current += step;
        return result;
    };
}

// Проверка на глубокое равенство двух объектов
function deepEqual(a, b) {
    // Проверка на строгое равенство
    if (a === b) return true;

    // Проверка на равенство функций по ссылке
    if (typeof a === 'function' && typeof b === 'function') {
        return a === b;
    }

    // Проверка на равенство NaN (так как NaN не равен самому себе)
    if (a !== a && b !== b) return true;

    // Проверка, что оба аргумента являются объектами
    if (
        typeof a !== 'object' ||
        typeof b !== 'object' ||
        a == null ||
        b == null
    ) {
        return false;
    }

    // Получение ключей обоих объектов
    let keysA = Object.keys(a),
        keysB = Object.keys(b);

    // Проверка на равенство количества ключей
    if (keysA.length !== keysB.length) return false;

    // Рекурсивная проверка каждого ключа в объекте a
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
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
