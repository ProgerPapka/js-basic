// Функция, которая проверяет, является ли число целым, используя побитовые операторы
function isInteger(n) {
  return (n ^ 0) === n; // Используем побитовую операцию XOR для проверки целого числа
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

function isBinary(n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0; // Проверяем, содержит ли число только одну единицу в двоичном представлении, исключая 0
}

// Функция, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Функция, которая возвращает функцию для выполнения операции
function getOperationFn(initialValue, operatorFn = (a, b) => a) {
  let storedValue = initialValue;
  return function (newValue) {
    storedValue = operatorFn(storedValue, newValue);
    return storedValue;
  };
}

// Функция для создания генератора арифметической последовательности
function sequence(start = 0, step = 1) {
  return function generator() {
    const currentValue = start;
    start += step;
    return currentValue;
  };
}

// Функция для сравнения объектов на их глубокое равенство
function deepEqual(firstObject, secondObject) {
  if (firstObject !== firstObject && secondObject !== secondObject) {
    return true; // Проверяем на NaN и возвращаем true, если оба NaN
  }

  if (firstObject === secondObject) {
    return true;
  }

  if (typeof firstObject !== 'object' || typeof secondObject !== 'object') {
    return false;
  }

  const keys1 = Object.keys(firstObject);
  const keys2 = Object.keys(secondObject);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
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
