//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return !((n ^ 0) !== n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const m = [];
    for (let i = 2; i <= 20; i++) if (i % 2 === 0) m.push(i);
    return m;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let acc = 0;
    for (let i = 0; i <= n; ++i) acc += i;
    return acc;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (!n) return 0;
    else return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (!n) return 1;
    if (n > 0) return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 1) return true;
    else if (n < 1) return false;
    if (n === 1) {
        return true;
    } else {
        return isBinary(n / 2);
    }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (operatorFn === undefined) return () => initialValue;
    return function (val) {
        return (initialValue = operatorFn(initialValue, val));
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    return function () {
        const t = start;
        start += step;
        return t;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (typeof firstObject !== typeof secondObject) return false;
    const a1 = Object.getOwnPropertyNames(firstObject);
    const a2 = Object.getOwnPropertyNames(secondObject);
    if (a1.length !== a2.length) return false;
    if (a1.length === 0) return Object.is(firstObject, secondObject);
    for (let i of a1) {
        const temp = i;
        const flag =
            typeof firstObject[temp] === 'object' &&
            typeof secondObject[temp] === 'object' &&
            firstObject[temp] !== null;
        if (
            (!flag && firstObject[temp] !== secondObject[temp]) ||
            (flag && !deepEqual(firstObject[temp], secondObject[temp]))
        )
            return false;
    }
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
