//Exercícios de entrevista


//ex1 - Encontrar números de fibonacci pares e somar eles.

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;
var sum = 0;

for (let i = 2; i <= 7; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];}

for (let i = 1; i < fibonacci.length; i++){

    if (fibonacci[i] % 2 == 0) {
    sum += fibonacci[i]}
} 

console.log(sum)

//ex2 - Calcula o número fatorial n! e somar eles.

let num = n;
let sum = num;

for (let i = 1; i < num; i++) {
    sum *= i;
}

console.log(sum);

//ex3 - esse aqui era gigantesco e não consegui resolver direito :(

const arr = [1, 2, 5, 3, 1];
let n = arr.legth;


arr.sort((a,b) => a - b)

let k = [(arr[0], arr[1])];

console.log(k[0,1])
