const sumToWithCycle = (n) => {
  let sum=0;
  for (let i=1; i<=n; i++) {
    sum+=i;
  }
  return sum;
}

const sumWithArithmeticProgression = (n) => {
  return (1+n)*n/2;
}

const sumWithRecursion = (n,sum=1) => {
  if (n===1) {
    return 1
  } else return n + sumWithRecursion(n-1);
}

const factorial = (n) => {
  const cashe = {};
  if(n===0) {
    return 1
  } else {
    if (n in cashe) {
      return cashe[n]
    } else {
      const result = n * factorial(n-1);
      cashe[n] = result;
      return result;
    }
  };
}

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const printListCycle = (node) => {
  let listNode = node;
  while(listNode) {
    alert(listNode.value);
    listNode = listNode.next;
  }
}

const printList = (node) => {
  alert(node.value)
  if (node.next) {
    printList(node.next);
  }
}


// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
  return function(b) {
    return a + b;
  };
}

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

//     inBetween(a, b) – между a и b (включительно).
//     inArray([...]) – находится в данном массиве.

// Они должны использоваться таким образом:

//     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//     arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}


// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}


// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}


// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

//     Используя setInterval.
//     Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

function printNumbersRecursion(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}




module.exports = {
  sumToWithCycle,
  sumWithArithmeticProgression,
  sumWithRecursion,
  factorial,
  fib,
}
