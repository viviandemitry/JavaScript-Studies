
//EX1: Suppose we want to write a function that calculates the sum of all number from 1 up to (and including) some number n.

function addUpTo(n) {
  let total = 0;
  for (let i=1; i<= n; i++) {
    total += i;
  }
  return total;
}

//or

function addUpTo(n) {
  return n * (n + 1) / 2;
}

//ex2

function logAtMost5 (n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
} // resultado: menor ou igual a 5.

