
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

function charCount(str) {
  //make object to return at end
  var result = {};
  //loop over string, for each character...
  for (var i = 0; i < str.length; i++){
    var char = str[i]
    //if the char is a number/letter AND is a key in object, add one to count
    if(result[char] > 0) {
      result[char]==;
    }
    //if the char is a number/letter AND not in object, add it to obejct and set value to 1
    else{
      result[char] = 1;
    };
  }
  return result;
}
charCount("hello"); // {h1:1, e:1, l:2, o:1}

//Write a function called same, which accepts two arrays, the function should return true if every value in the array has its corresponding value squared in the second array. The same frequency as well. 

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex === -1 //checking if the index is in there, if is negative is because its not there
    {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1)
  }
  return true;
}
