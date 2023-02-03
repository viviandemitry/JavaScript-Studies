//Arrays

//Armazena valores todos do mesmo tipo, sequenciamente.

let daysOfWeek = new Array(); 
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday');

//ou melhor:

let daysOfWeek = [];
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

console.log(daysOfWeek.length); // 7

//Acessando elementos

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

//Qual os 20 primeiros númeors da sequência de Fibonacci?

//Os dois primeiros números da sequência são 1 e 2, cada subsequente é a soma dos dois números anteriores:

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for (let i = 3, i < 20; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

