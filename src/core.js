//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return ((n << 1) >> 1) === n;
}


//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return Array
        .from(Array(20 + 1).keys())
        .filter((number) => number > 0 && number % 2 === 0);
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let counter = 0
    let sum = 0
    while (counter <= n) {
        sum += counter++
    }
    return sum
}

// Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 0) {
        return 0
    }
    return n + recSumTo(n - 1)
}

// Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let factorial = 1
    let counter = 1
    while (counter <= n) {
        factorial *= counter++
    }
    return factorial
}

// Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let counter = 1
    while (counter <= n) {
        if (counter === n) {
            return true
        }
        counter = counter << 1
    }
    return false
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fibNumbers = Array.from(Array(2).keys())
    let length = fibNumbers.length
    while (fibNumbers.length <= n) {
        length = fibNumbers.push(fibNumbers[length - 1] + fibNumbers[length - 2])
    }
    return fibNumbers[length - 1]
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
    let innerVal = initialValue
    return x => {
        if (operatorFn !== undefined) {
            innerVal = operatorFn(innerVal, x)
        }
        return innerVal
    }
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
function sequence(start, step) {
    let innerVal = start
    if (innerVal === undefined) innerVal = 0
    return () => {
        let lastVal = innerVal
        if (step === undefined) innerVal += 1
        else innerVal += step
        return lastVal
    }
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
    if (firstObject === secondObject) {
        return true
    }

    if (firstObject !== firstObject || secondObject !== secondObject) {
        return isNaN(firstObject) && isNaN(secondObject)
    }
    if (!((typeof firstObject == "object" && firstObject != null) && (typeof secondObject == "object" && secondObject != null))) {
        return false
    }
    if (Object.keys(firstObject).length != Object.keys(secondObject).length) {
        return false
    }
    for (let val in firstObject) {
        if (!(val in secondObject)) {
            return false
        }
        if (!(deepEqual(firstObject[val], secondObject[val]))) {
            return false
        }
    }
    return true
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci, getOperationFn, sequence, deepEqual,
};
