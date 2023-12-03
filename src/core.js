// Функция, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return (n ^ 0) === n;
}

// Функция, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  const result = [];
  for (let i = 2; i <= 20; i += 2) {
    result.push(i);
  }
  return result;
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
  if (n === 1) {
    return 1;
  }
  return n + recSumTo(n - 1);
}

// Функция, считающая факториал заданного числа
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Функция, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  return (n & (n - 1)) === 0 && n !== 0;
}

// Функция, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Функция, возвращающая функцию-операцию
function getOperationFn(initialValue, operatorFn) {
  return function (newValue) {
    if (operatorFn) {
      return (initialValue = operatorFn(initialValue, newValue));
    } else {
      return initialValue;
    }
  };
}

// Функция создания генератора арифметической последовательности
function sequence(start = 0, step = 1) {
  return function () {
    const current = start;
    start += step;
    return current;
  };
}

// Функция deepEqual
function deepEqual(firstObject, secondObject) {
  if (firstObject === secondObject) {
    return true;
  }

  if (
    typeof firstObject !== 'object' ||
    typeof secondObject !== 'object' ||
    firstObject === null ||
    secondObject === null
  ) {
    return false;
  }

  const keysFirst = Object.keys(firstObject);
  const keysSecond = Object.keys(secondObject);

  if (keysFirst.length !== keysSecond.length) {
    return false;
  }

  for (const key of keysFirst) {
    if (!keysSecond.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
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
