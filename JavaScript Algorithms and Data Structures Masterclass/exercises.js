
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

//UNDERTAND THE PROBLEM

//1. Can I restate the problem in my own words?
//2. What are the inputs that go into the problem?
//3. What are the outputs that should come from the solution to the problem?
//4. Can the outputs be determined from the inputs?
//5. How sould I label the important pieces of data that are a part of the problem?

//ex: Write a function hich takes in a string and returns counts of each character in the string.

charCount("aaaa"); //{a:4}
charCount("hello"); // {h1:1, e:1, l:2, o:1}
